dependencias
npm init -y

npm install express pg jsonwebtoken bcrypt dotenv
npm install -D typescript ts-node-dev @types/express @types/pg @types/jsonwebtoken @types/bcrypt @types/node

npx tsc --init

npm i ts-node-dev --save-dev
-----------------------------------------------------------------------------------------
tabelas 
CREATE TABLE usuarios (
    id    SERIAL PRIMARY KEY,
    nome  VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    sobrenome Varchar(150) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    data_nascimento VARCHAR(10),
    cargo VARCHAR(100),
    salario NUMERIC(10, 2),
    data_admissao VARCHAR(10),
    ativo BOOLEAN DEFAULT TRUE,
    usuario_id INTEGER NOT NULL,
    CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

