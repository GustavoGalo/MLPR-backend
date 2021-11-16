# MLRP - backend


### 🎲 Rodando o Back End (servidor)
```bash
# Clone este repositório
$ git clone https://github.com/GustavoGalo/MLPR-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd MLPR-backend

# Instale as dependências
$ npm install

# Obtenha a imagem do Mongo
$ docker pull mongo

# Execute o container
$ docker run -v ~/docker --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=username -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```
String de Conexão 
```
mongodb://username:password@localhost:27017/admin
```

Crie o arquivo *.env* na base do projeto com o seguinte conteúdo:
```txt
PORT=5000
URI=mongodb://username:password@localhost:27017/admin
```
```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:5000 - acesse <http://localhost:5000>
# O servidor inciará em <http://localhost:5000/api/docs>
```

