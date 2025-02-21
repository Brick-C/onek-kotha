import socket

HOST = "localhost"
PORT = 5656

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((HOST, PORT))
server_socket.listen()

print(f"Server listening on {HOST}:{PORT}")

while True:
    client_socket, client_address = server_socket.accept()
    print(f"Connected to client at {client_address}")

    welcome_message = "Hello from the server!"
    client_socket.send(welcome_message.encode())

    client_message = client_socket.recv(1024).decode()
    print(f"Received from client: {client_message}")

    client_socket.close()
