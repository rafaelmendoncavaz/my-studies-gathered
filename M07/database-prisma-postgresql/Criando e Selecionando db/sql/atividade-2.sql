CREATE TABLE employees (
  "id"    SERIAL       PRIMARY KEY,
  "name"  VARCHAR(200) NOT NULL,
  "email" VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE contracts (
  "id"          SERIAL    PRIMARY KEY,
  "startedAt"   DATE      NOT NULL,
  "expiresAt"   DATE      NOT NULL,
  "employeeId"  INTEGER   UNIQUE        NOT NULL,

  FOREIGN KEY ("employeeId") REFERENCES employees ("id") ON DELETE CASCADE
);

CREATE TABLE skills (
  "id"          SERIAL        PRIMARY KEY,
  "name"        VARCHAR(100)  NOT NULL,
  "employeeId"  INTEGER       NOT NULL,

  FOREIGN KEY ("employeeId") REFERENCES employees ("id") ON DELETE CASCADE
);

INSERT INTO employees (
  "name",
  "email"
)
VALUES (
  'John Doe',
  'john.doe@example.com'
) RETURNING *;

INSERT INTO contracts (
  "startedAt",
  "expiresAt",
  "employeeId"
)
VALUES (
  NOW(),
  NOW() + INTERVAL '1 year',
  1
) RETURNING *;

INSERT INTO skills (
  "name",
  "employeeId"
)
VALUES (
  'Python',
  1
),
(
  'JavaScript',
  1
),
(
  'SQL',
  1
);