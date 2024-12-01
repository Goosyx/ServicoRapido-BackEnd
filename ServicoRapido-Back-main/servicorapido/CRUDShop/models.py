from django.db import models

# Create your models here.

class Categoria(models.Model):
    categoria = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.categoria

class Produto(models.Model):
    preco = models.DecimalField(decimal_places=2, max_digits=12)
    descricao = models.CharField(max_length=200)
    IDCategoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    nome = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.descricao