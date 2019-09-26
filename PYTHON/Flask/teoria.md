## What IS?
Flask is a lightweight WSGI web application framework. 
It is designed to make getting started quick and easy, with the ability to scale up to complex applications.
It began as a simple wrapper around Werkzeug and Jinja and has become one of the most popular Python web application frameworks.

Flask offers suggestions, but doesn't enforce any dependencies or project layout.
It is up to the developer to choose the tools and libraries they want to use.
There are many extensions provided by the community that make adding new functionality easy.


> WSGI é um acrônimo para Web Server Gateway Interface, trata-se de uma forma para servidores conversarem com frameworks, e vice-versa.

> O Web Server Gateway Interface, em português Interface de Porta de Entrada do Servidor Web, é uma especificação para uma interface simples e universal entre servidores web e aplicações web ou frameworks para a linguagem de programação Python.

> O WSGI foi criado como uma interface de baixo-nível entre servidores web e aplicações web ou frameworks para promover uma base comum para o desenvolvimento de aplicações web portáteis.


# What WSGI does?

O chamado middleware WSGI implementa os dois lados da API, desta forma ele pode intermediar entre um servidor WSGI e uma aplicação WSGI: o middleware age como uma aplicação de algum ponto de vista do servidor WSGI e como um servidor de algum ponto de vista da aplicação WSGI. Um componente "middleware" pode realizar funções como:

Rotear uma requisição para diferentes objetos da aplicação baseados na URL alvo, após mudar as variáveis de ambiente adequadamente.
Permitir várias aplicações ou frameworks executarem lado a lado no mesmo processo
Balanceamento de carga e processamento remoto, enviando requisições e respostas sobre uma rede
Realizar pós-processamento de conteúdo, como aplicar folhas de estilo XSLT

<!--
from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

-->