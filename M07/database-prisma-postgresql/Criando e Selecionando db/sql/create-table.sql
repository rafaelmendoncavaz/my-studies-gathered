CREATE TABLE IF NOT EXISTS products (
  "id"          SERIAL        PRIMARY KEY,
  "name"        VARCHAR(255)  NOT NULL,
  "description" TEXT,
  "price"       INTEGER       NOT NULL,
  "createdAt"   TIMESTAMP     NOT NULL,
  "updatedAt"   TIMESTAMP     NOT NULL  
);

DROP TABLE IF EXISTS messages;