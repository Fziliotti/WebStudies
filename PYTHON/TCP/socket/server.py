#server.py
#!/usr/bin/python                               # This is server.py file

import socket                                   # Import socket module

s = socket.socket()                             # Create a socket object
host = socket.gethostname()               # Get local machine name
print(host)
port = 3333                                    # Reserve a port for your service.
s.bind((host, port))                            # Bind to the port

s.listen(5)  

msg = ''  

while True:
   c, addr = s.accept()    
   print('Esperando conexão.')                     # Establish connection with client.
   print('Esperando mensagem.')
  

   while msg != 'SAIR':
    msg = c.recv(1024)
    print('Mensagem recebida:', msg.decode())
    print('Digite resposta:')
    msgEnviar = input()
    c.send(msgEnviar.encode())
    

   print('Conexão encerrada.')
   c.close()                                    # Close the connection