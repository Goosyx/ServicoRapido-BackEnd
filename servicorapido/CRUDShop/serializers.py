from rest_framework import serializers
from.models import *

class Tipo(serializers.ModelSerializer):
     class Meta:
         model = Categoria
         fields = ('categoria')

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = (
            'IDCategoria',
            'descricao',
            'preco',
            'nome',
            )
