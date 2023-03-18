-- Create the database "camelon"
CREATE DATABASE IF NOT EXISTS camelon;

-- Use the database "camelon"
USE camelon;

-- Create the table "News"
CREATE TABLE News (
	news_id VARCHAR(255) PRIMARY KEY,
    publish_date VARCHAR(255),
	news_title VARCHAR(255),
	news_intro TEXT,
	news_description TEXT,
    news_image VARCHAR(255),
    crime_type VARCHAR(255),
    date_time DATETIME,
    district VARCHAR(255),
    subdistrict VARCHAR(255),
    province VARCHAR(255),
    latitude DECIMAL,
    longitude DECIMAL
);

-- Create the table "News_info"
CREATE TABLE News_info (
  info_id INT PRIMARY KEY AUTO_INCREMENT,
  news_id VARCHAR(255),
  criminal VARCHAR(255),
  `action` VARCHAR(255),
  victim VARCHAR(255),
  `trigger` VARCHAR(255),
  location VARCHAR(255),
  `datetime` VARCHAR(255),
  rootcause VARCHAR(255),
  worth VARCHAR(255),
  item VARCHAR(255),
  enforcement VARCHAR(255),
  crime_type VARCHAR(255),
  FOREIGN KEY (news_id) REFERENCES News(news_id) ON DELETE CASCADE
);

-- Create the table "Locations"
CREATE TABLE Locations (
  place_id VARCHAR(255) PRIMARY KEY,
  formatted_address TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  location_type VARCHAR(255),
  info_id INT,
  district VARCHAR(255),
  subdistrict VARCHAR(255),
  province VARCHAR(255),
  FOREIGN KEY (info_id) REFERENCES News_info(info_id) ON DELETE CASCADE
);

CREATE TABLE Thairath_Metadata(
	News_id VARCHAR(255) PRIMARY KEY,
    source VARCHAR(20),
    news LONGTEXT ,
    crime_type VARCHAR(255),
    `date` Datetime 
);
