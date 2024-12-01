from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth import authenticate
from rest_framework import status

from .models import *
from .serializers import *

@api_view(['GET', 'POST'])
def userLista(request):
    if request.method == 'GET':
        data = User.objects.all()
        serializer = UserSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def userLogin(request):
    email = request.data.get('email')
    senha = request.data.get('senha')

    if email is None or senha is None:
        return Response({'message':'Preencha corretamente os campos para o login'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        try:
            data = User.objects.get(email=email, senha=senha)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer(data)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

@api_view(['GET','PUT','DELETE'])
def usersDetail(request,userID):
    try:
        user = User.objects.get(pk=userID)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data,context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
def enderecoLista(request):
    if request.method == 'GET':
        data = Endereco.objects.all()
        serializer = EnderecoSerializer(data, context={'request':request}, many=True)
        return Response(serializer.data)
    
@api_view(['GET','POST'])
def userEndereco(request,userID):
    try:
        user = User.objects.get(pk=userID)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = EnderecoSerializer(user.enderecos, context={'request':request}, many = True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = EnderecoSerializer(data=request.data)
        if serializer.is_valid():
            endereco = serializer.save()
            user.enderecos.add(endereco)
            user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT', 'DELETE'])
def userEnderecoEdit(request,userID, enderecoID):
    try:
        endereco = Endereco.objects.get(pk=enderecoID)
        user = User.objects.get(pk=userID, enderecos=endereco)
    except Endereco.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = EnderecoSerializer(endereco, context={'request':request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EnderecoSerializer(endereco, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.enderecos.remove(endereco)
        return Response(status=status.HTTP_204_NO_CONTENT)
