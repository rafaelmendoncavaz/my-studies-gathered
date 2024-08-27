CREATE DATABASE atividade_1;

--- CREATING TABLE ---

CREATE TABLE IF NOT EXISTS students (
  "id"     SERIAL       PRIMARY KEY,
  "name"   VARCHAR(150) NOT NULL,
  "email"  VARCHAR(150) NOT NULL,
  "module" VARCHAR(2)   NOT NULL,
  "score"  INTEGER      NOT NULL,
  "active" BOOLEAN      NOT NULL
);

--- INSERTING DATA ---

INSERT INTO students ("name", "email", "module", "score", "active")
VALUES (
  'Enzo',
  'enzo@email.com',
  'M3',
  85,
  true
),
(
  'Valentina',
  'valentina@email.com',
  'M4',
  97,
  true
),
(
  'Osvaldo',
  'osvaldo@email.com',
  'M5',
  65,
  false
) RETURNING *;

--- SELECTING DATA ---

SELECT * FROM students WHERE "score" > 79;

SELECT * FROM students WHERE "active" = false;

--- UPDATING DATA ---

UPDATE students SET "active" = true WHERE "active" = false RETURNING *;

--- DELETING DATA ---

DELETE FROM students WHERE "name" ILIKE '%enzo%' RETURNING *;

--- DELETING TABLE ---

DROP TABLE students;