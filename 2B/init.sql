-- Drop if exists --
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS phones;


CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES people(id) ON DELETE CASCADE,
  number VARCHAR(255) NOT NULL
);

INSERT INTO people (first_name, last_name) VALUES
  ('John', 'Smith'),
  ('Mary', 'Jones'),
  ('Gerhard', 'Feuerhaufen'),
  ('Rami', 'Pitkäniemi'),
  ('Anna', 'Kråkström');


INSERT INTO phones (user_id, number) VALUES
  (2, '+1 213 621 0002'),
  (2, '+1 800 444 4444'),
  (1, '+1 604 444 4444'),
  (1, '+44 20 8759 9036'),
  (4, '+358 50 333 3333'),
  (5, '+46 771 793 336 ');