CREATE TABLE areas (
  "id"    SERIAL        PRIMARY KEY,
  "name"  VARCHAR(255)  NOT NULL
);

CREATE TABLE courses (
  "id"    SERIAL        PRIMARY KEY,
  "name"  VARCHAR(255)  NOT NULL
);

CREATE TABLE courses_areas (
  "id"        SERIAL    PRIMARY KEY,
  "areaId"    INTEGER   NOT NULL,
  "courseId"  INTEGER   NOT NULL,

  FOREIGN KEY ("areaId") REFERENCES areas ("id") ON DELETE CASCADE,
  FOREIGN KEY ("courseId") REFERENCES courses ("id") ON DELETE CASCADE
);

INSERT INTO areas ("name")
VALUES 
  ('Programação'),
  ('Front-End'),
  ('Back-End');

INSERT INTO courses ("name")
VALUES
  ('React'),
  ('SQL'),
  ('Typescript'),
  ('Go');

INSERT INTO courses_areas ("areaId", "courseId")
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 3),
  (3, 4);