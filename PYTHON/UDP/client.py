#client.py
#!/usr/bin/python                               # This is client.py file

import socket                                   # Import socket module

s = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)                             # Create a socket object
host = socket.gethostname()                # Get local machine name
port = 3333                                    # Reserve a port for your service.

msg = ''


while msg != 'SAIR':
  print('Digite Mensagem:')
  msg = input()

  sent = s.sendto(msg.encode(), (host, port))
  print('Mensagem enviada.')

  
  print('Esperando resposta.')
  data, addr = s.recvfrom(4096)
  
  print('Resposta Recebida:', data.decode())

print('Desconectando')
s.close()                                    