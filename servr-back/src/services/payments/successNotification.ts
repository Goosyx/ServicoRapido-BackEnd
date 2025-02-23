import config from "../../config/config";
import { ISuccessNotificationPayment } from "../../interfaces/IPaymentInterface";
import { IStoreRepository } from "../../interfaces/IStoreRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { NotificationProvider } from "../../providers/notificationProvider";

export class SuccessNotificationPaymentService {
  constructor(
    private notificationProvider: NotificationProvider,
    private storeRepo: IStoreRepository,
    private userRepo: IUserRepository,
  ){}
  
  async execute({ storeId, buyer, items, shipping }: ISuccessNotificationPayment): Promise<any>{
    // Envia para o email da loja a notificação de sucesso de pagamento
    let storeEmail = '';
    let storeName = '';
    const findStore = await this.storeRepo.findOneStore(storeId);
    if(findStore){
      storeName = findStore.name;
      const findUser = await this.userRepo.findOneUser(findStore.userId);
      if(findUser){
        storeEmail = findUser.email;
      }
    }

    await this.notificationProvider.sendEmailNotification({
      to: storeEmail || '',
      subject: '[Serviço Rápido] Você recebeu uma compra!',
      text: `
        Olá ${storeName}, você recebeu uma nova compra em sua loja!\n\n
        Nome do comprador: ${buyer.name}\n
        Produtos comprados: ${items.map(item => `${item.name} - ${item.quantity}x`).join(', ')}\n
        Endereço de entrega: ${shipping.line1},${shipping.line2 ? shipping.line2 + ',' : ''} ${shipping.postal_code} - ${shipping.city}/${shipping.state}\n
        Valor total: R$ ${(items.reduce((acc, item) => acc + item.price, 0)/100).toFixed(2)}\n\n
        Obrigado por vender no Serviço Rápido!
      `
    })

    // Envia para o email do comprador a confirmação de compra
    await this.notificationProvider.sendEmailNotification({
      to: buyer.email,
      subject: '[Serviço Rápido] Sua compra foi confirmada!',
      text: `
        Olá ${buyer.name}, sua compra foi confirmada!\n\n
        Produtos comprados: ${items.map(item => `${item.name} - ${item.quantity}x`).join(', ')}\n
        Valor total: R$ ${(items.reduce((acc, item) => acc + item.price, 0)/100).toFixed(2)}\n\n
        Obrigado por comprar no Serviço Rápido!
      `
    })

    // Envia para o email do Serviço Rápido a notificação de sucesso de pagamento
    await this.notificationProvider.sendEmailNotification({
      to: config.nodemailer.auth.user,
      subject: '[Serviço Rápido] Nova compra realizada!',
      text: `
        Olá, uma nova compra foi realizada no Serviço Rápido!\n\n
        Nome do comprador: ${buyer.name}\n
        Email do comprador: ${buyer.email}\n
        Produtos comprados: ${items.map(item => `${item.name} - ${item.quantity}x`).join(', ')}\n
        Valor total: R$ ${(items.reduce((acc, item) => acc + item.price, 0)/100).toFixed(2)}\n\n
        Nome da loja: ${storeName}\n
        Contato da loja: ${storeEmail}\n\n
        Email de notificação enviado para a loja e para o comprador.
      `
    })

    return {
      message: 'Emails de notificação enviados com sucesso!'
    }
  }
}