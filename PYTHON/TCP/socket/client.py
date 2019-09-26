#client.py

#!/usr/bin/python                               # This is client.py file

import socket                                   # Import socket module

s = socket.socket()                             # Create a socket object
host = socket.gethostname()                # Get local machine name
port = 3333                                    # Reserve a port for your service.

msg = ''

s.connect((host, port))

while msg != 'SAIR':
  print('Digite Mensagem:')
  msg = input()

  
  print('Mensagem enviada.')
  s.send(msg.encode())  #Preciso transformar a string em array de bytes
  
  print('Esperando resposta.')
  resposta = s.recv(1024)
  
  print('Resposta Recebida:',resposta.decode())

print('Desconectando')
s.close()                                    