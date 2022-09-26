-- Active: 1660620348611@@35.226.146.116@3306@guimaraes-4211162-caio-rigotto

CREATE TABLE IF NOT EXISTS Pkm_data (
    id VARCHAR(64) PRIMARY KEY, 
    name VARCHAR(64) NOT NULL,
    pokedex_number FLOAT NOT NULL,
    family_id FLOAT DEFAULT NULL,
    generation FLOAT NOT NULL,
    type_1 VARCHAR(64) DEFAULT '',
    type_2 VARCHAR(64) DEFAULT '',
    stat_total FLOAT NOT NULL,
    atk FLOAT NOT NULL,
    def FLOAT NOT NULL,
    sta FLOAT NOT NULL
);