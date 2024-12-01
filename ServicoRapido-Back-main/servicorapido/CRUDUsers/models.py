from django.db import models

# Create your models here.
class Endereco(models.Model):
    cidade = models.CharField(max_length=50)
    estado = models.CharField(max_length=20)
    logradouro = models.CharField(max_length=20)
    numero = models.IntegerField()
    bairro = models.CharField(max_length=50)
    cep = models.IntegerField()
    
    def __str__(self):
        return str((self.cidade, self.estado, self.logradouro, self.bairro, self.numero, self.cep))
    
class User(models.Model):
    nome = models.CharField(max_length=50)
    email = models.EmailField(max_length=254, error_messages="ERRO: e-mail fornecido não é valido")
    senha = models.CharField(max_length=30)

    def __str__(self):
        return str((self.nome, self.email, self.senha))