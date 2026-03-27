-- Création de la base de données
-- CREATE DATABASE iran_news;
-- USE iran_news;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  contenu TEXT NOT NULL,
  image VARCHAR(255),
  date_publication DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_id INT,

  -- clé étrangère
  FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE SET NULL
);

-- INSERT INTO users (username, password)
-- VALUES (
--   'admin',
--   '$2b$10$abcdefghijklmnopqrstuv' 
-- );

-- INSERT INTO articles (titre, contenu, image, user_id)
-- VALUES (
--   'Guerre en Iran : actualité',
--   'Contenu de l’article ici...',
--   'image.jpg',
--   1
-- );