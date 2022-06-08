-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/EvUCgb
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS boards
CASCADE;
DROP TABLE IF EXISTS gifs
CASCADE;
DROP TABLE IF EXISTS boards_gifs
CASCADE;




CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    date_created timestamp   NOT NULL,
    date_last_edited timestamp   NOT NULL    
);

CREATE TABLE boards (
    id SERIAL   PRIMARY KEY,
    name text   NOT NULL,
    user_Id text   NOT NULL,
    date_created timestamp   NOT NULL,
    date_last_edited timestamp   NOT NULL
     
);

CREATE TABLE gifs (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    description text,
    giphy_id text NOT NULL
);

CREATE TABLE boards_gifs (
    board_id INTEGER   NOT NULL REFERENCES boards,
    gif_id INTEGER  NOT NULL REFERENCES gifs,
    PRIMARY KEY (board_id, gif_id)
);

-- ALTER TABLE users ADD CONSTRAINT fk_Users_id FOREIGN KEY(id)
-- REFERENCES boards (user_ID);

-- ALTER TABLE "Board" ADD CONSTRAINT "fk_Board_id" FOREIGN KEY("id")
-- REFERENCES "Board_Gif" ("board_id");

-- ALTER TABLE "Gif" ADD CONSTRAINT "fk_Gif_id" FOREIGN KEY("id")
-- REFERENCES "Board_Gif" ("gif_id");

INSERT INTO users
  (username, email, password, date_created, date_last_edited)
  VALUES
  ('JoeyNoods', 'jj@gmail.com', '12345', '2004-10-19 10:23:54', '2004-10-19 10:23:54');
INSERT INTO users
  (username, email, password, date_created, date_last_edited)
  VALUES
  ('MarySue', 'marySue@gmail.com', '12345', '2004-10-20 10:23:54', '2004-10-20 10:23:54');

INSERT INTO boards
  (name, user_id, date_created, date_last_edited)
  VALUES
  ('firstBoard', 1, '2004-10-19 10:23:54', '2004-10-19 10:23:54');

INSERT INTO boards
  (name, user_id, date_created, date_last_edited)
  VALUES
  ('second board', 2, '2004-10-20 10:23:54', '2004-10-20 11:23:54');

INSERT INTO gifs
  (name, description, giphy_id)
  VALUES
  ('Mean', 'start with dominant hand open in front of you. Give two quick squeezes, leaving hand closed after second squeeze', '3o7TKvsHER8leUJvAQ');
INSERT INTO gifs
  (name, description, giphy_id)
  VALUES
  ('Milk', 'start with dominant hand open in front of you. Give two quick squeezes, leaving hand closed after second squeeze', '3o7TKIeb4GHExS3atG');

INSERT INTO boards_gifs
  (board_id, gif_id)
  VALUES(1, 1);

INSERT INTO boards_gifs
  (board_id, gif_id)
  VALUES(2, 2);






