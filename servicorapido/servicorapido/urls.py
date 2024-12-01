from django.contrib import admin
from django.urls import path, include, re_path
from CRUDUsers import views as userViews
from CRUDShop import views as shopViews


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/users/$', userViews.userLista),
    re_path(r'^api/user/([0-9]+)$', userViews.usersDetail),
    re_path(r'api/user/login', userViews.userLogin),
    re_path(r'^api/produtos/$', shopViews.produtoLista),
    re_path(r'^api/produto/([0-9]+)$', shopViews.produtoDetalhes),
    re_path(r'^api/enderecos/$', userViews.enderecoLista),
    re_path(r'^api/user/([0-9]+)/enderecos/$', userViews.userEndereco),
    re_path(r'^api/user/([0-9]+)/endereco/([0-9]+)$', userViews.userEnderecoEdit)
]

