# MLRP - backend

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://docs.docker.com/engine/install/)


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

# Crie o arquivo .env na base do projeto
$ touch .env

# Coloque o seguinte conteúdo no arquivo .env
PORT=5000
URI=mongodb://username:password@localhost:27017/admin

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5000 - acesse <http://localhost:5000>
# O servidor inciará em <http://localhost:5000/api/docs>
```

