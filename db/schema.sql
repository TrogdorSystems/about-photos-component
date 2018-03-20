CREATE SCHEMA restaurants;
  CREATE TABLE restaurant (
    id INT NOT NULL,
    name VARCHAR (20) NOT NULL,
    description VARCHAR (200) NOT NULL, 
    hours INT NOT NULL, 
    price DECIMAL NOT NULL,
    style VARCHAR (20),
    phone INT NOT NULL,
    PRIMARY KEY (id)
    );
  CREATE TABLE img (
    id INT NOT NULL,
    url VARCHAR (20) NOT NULL,
    imgType VARCHAR (20) NOT NULL,
    restaurant_id INT NOT NULL,
    PRIMARY KEY (id)
    );
  -- ALTER TABLE imgs add foreign key (restaurantid) references restaurant (id);
  -- ALTER TABLE restaurant add primary key (id);

-- \copy restaurant (id, name, description, hours, price, style, phone) from 'db/csv/restaurantsInfo.csv' CSV HEADER DELIMITER ',';
-- \copy img (id, url, imgType, restaurant_id) from 'db/csv/imgs.csv' WITH csv;