CREATE DATABASE notesbasededonn√©es;
USE notesbasededonn√©es;
CREATE TABLE notes(
    id INT NOT NULL AUTO_INCREMENT,
    titre VARCHAR(100)NOT NULL,
    contenu TEXT NOT NULL,
    PRIMARY KEY(id) 
)
ENGINE = InnoDB;