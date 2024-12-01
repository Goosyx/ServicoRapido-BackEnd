# Generated by Django 5.0.3 on 2024-04-19 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Endereco',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cidade', models.CharField(max_length=50)),
                ('estado', models.CharField(max_length=20)),
                ('logradouro', models.CharField(max_length=20)),
                ('numero', models.IntegerField()),
                ('bairro', models.CharField(max_length=50)),
                ('cep', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('senha', models.CharField(max_length=30)),
            ],
        ),
    ]