CREATE DATABASE IF NOT EXISTS cuestionario_vocacional;
USE cuestionario_vocacional;

CREATE TABLE IF NOT EXISTS respuestas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    respuestas JSON NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

