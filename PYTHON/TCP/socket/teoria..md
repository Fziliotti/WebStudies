import socket
# 0 a 1024 sao endpoints de serviços bem conhecidos
s = socket.socket ()
host = socket.gethostname()
port = 12345

# esse socket está associado esse host nessa porta
s.bind((host, port))

s.listen(5) #5 conexoes que estao esperando para serem aceitas

while True:
  c, addr = s.accept() #recebo um outro socket
  print 'Got connection from', addr
  c.send('Thank yout for connecting')
  c.close()

#Um socket tem o que aceita e o outro 