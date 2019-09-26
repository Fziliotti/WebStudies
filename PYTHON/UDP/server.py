#server.py
#!/usr/bin/python                               # This is server.py file

import socket                                   # Import socket module

s = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)                            # Create a socket object
host = socket.gethostname()               # Get local machine name

port = 3333                                    # Reserve a port for your service.
s.bind((host, port))                            # Bind to the port


msg = ''  

while True:

   print('Esperando mensagem.')
  
   while msg != 'SAIR':
    msg, addr = s.recvfrom(4096)
    print('Mensagem recebida:', msg.decode())
    print('Digite resposta:')
    msgEnviar = input()
    sent = s.sendto(msgEnviar.encode(), addr)
    

   print('Conexão encerrada.')
   c.close()                                    # Close the connection

