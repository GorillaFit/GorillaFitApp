
DROP DATABASE if exists gorilla_fit;

CREATE DATABASE IF NOT EXISTS gorilla_fit;

use gorilla_fit;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user'
-- user
-- ---

DROP TABLE IF EXISTS `user`;
    
CREATE TABLE `user` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(140) NOT NULL UNIQUE ,
  `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) COMMENT 'user';
  
-- ---
-- Table 'personal_information'
-- user information table
-- ---

DROP TABLE IF EXISTS `personal_information`;

CREATE TABLE `personal_information` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userid` INTEGER NOT NULL UNIQUE,
  `height` INTEGER NOT NULL,
  `weight` INTEGER NOT NULL,
  `calorie_intake` INTEGER NOT NULL,
  `email` VARCHAR(140) NOT NULL,
  `firstname` VARCHAR(140) NOT NULL,
  `lastname` VARCHAR(140) NOT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'user information table';



-- ---
-- Table 'food'
-- 
-- ---

DROP TABLE IF EXISTS `food`;
    
CREATE TABLE `food` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userid` INTEGER NOT NULL,
  `food_name` VARCHAR(140) NULL DEFAULT NULL,
  `brand_name` VARCHAR (140) NULL DEFAULT NULL,
  `calories` DECIMAL(10,2) NULL DEFAULT NULL,
  `total_fat` DECIMAL(10,2) NULL DEFAULT NULL,
  `saturated_fat` DECIMAL(10,2) NULL DEFAULT NULL,
  `cholesterol` DECIMAL(10,2) NULL DEFAULT NULL,
  `sodium` DECIMAL(10,2) NULL DEFAULT NULL,
  `carbohydrates` DECIMAL(10,2) NULL DEFAULT NULL,
  `fiber` DECIMAL(10,2) NULL DEFAULT NULL,
  `sugars` DECIMAL(10,2) NULL DEFAULT NULL,
  `proteins` DECIMAL(10,2) NULL DEFAULT NULL,
  `potassium` DECIMAL(10,2) NULL DEFAULT NULL,
  `photo` VARCHAR(250) NULL DEFAULT NULL,
  `meal_time` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'exercise'
-- 
-- ---

DROP TABLE IF EXISTS `exercise`;
    
CREATE TABLE `exercise` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userid` INTEGER NOT NULL,
  `user_input` VARCHAR(140) NOT NULL,
  `calories` DECIMAL(10,2) NOT NULL,
  `photo` VARCHAR(250) NULL DEFAULT NULL,
  `category` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `personal_information` ADD FOREIGN KEY (userid) REFERENCES `user` (`id`);
ALTER TABLE `food` ADD FOREIGN KEY (userid) REFERENCES `user` (`id`);
ALTER TABLE `exercise` ADD FOREIGN KEY (userid) REFERENCES `user` (`id`);
-- ---
-- Table Properties
-- ---

-- ALTER TABLE `personal_information` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `food` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `exercise` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `new table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---


INSERT INTO `user` (`id`,`username`) VALUES
('1','ben');
INSERT INTO `user` (`id`,`username`) VALUES
('2','david');
INSERT INTO `user` (`id`,`username`) VALUES
('3','jake');
INSERT INTO `user` (`id`,`username`) VALUES
('4','karina');
INSERT INTO `user` (`id`,`username`) VALUES
('5','tyler');
INSERT INTO `user` (`id`,`username`) VALUES
('6','jacob');
INSERT INTO `user` (`id`,`username`) VALUES
('7','davidv');
INSERT INTO `user` (`id`,`username`) VALUES
('8','kevin');
INSERT INTO `user` (`id`,`username`) VALUES
('9','cammie');
INSERT INTO `user` (`id`,`username`) VALUES
('10','li');

INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('1','1','122','100','2000','a@b.com', 'ben','abc');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('2','2','145','140','2500','b@b.com', 'david','def');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('3','3','156','156','3000','a@b.com', 'jake','ghi');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('4','4','180','220','4500','c@b.com', 'karina','jkl');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('5','5','170','275','7500','d@b.com', 'tyler','mno');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('6','6','185','300','2000','e@b.com', 'jacob','pqr');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('7','7','134','150','1975','f@b.com', 'davidv','stv');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('8','8','140','123','2200','h@b.com', 'kevin','uvw');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('9','9','145','176','3000','g@b.com', 'cammie','xyz');
INSERT INTO `personal_information` (`id`,`userid`,`height`,`weight`,`calorie_intake`,`email`,`firstname`,`lastname`) VALUES
('10','10','129','150','9000','i@b.com', 'li','abca');

INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','1','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('1','random food','234','234','342','3424','53','2','23','2342','23','23','234','no','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('1','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','1','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('2', 'random food','234','234','342','3424','53','2','23','2342','23','23','234','no','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('2', 'gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','3','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('3','random food','234','234','342','3424','53','2','23','2342','23','23','234','nope','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('3','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','4','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('4','random food','234','234','342','3424','53','2','23','2342','23','23','234','never','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('4','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','5','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','random food','234','234','342','3424','53','2','23','2342','23','23','234','over','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('5','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','5','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('5','random food','234','234','342','3424','53','2','23','2342','23','23','234','comeone','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('5','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','6','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('6','random food','234','234','342','3424','53','2','23','2342','23','23','234','no','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('6','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','7','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('7','random food','234','234','342','3424','53','2','23','2342','23','23','234','really','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('7','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','8','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('8','random food','234','234','342','3424','53','2','23','2342','23','23','234','onemore','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('8','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','9','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('9','random food','234','234','342','3424','53','2','23','2342','23','23','234','can idie now','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('9','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','chicken salad','abc','123','456','789','1011','1213','1415','62','213','12','1234','12','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','greek salad','123','121','113','312','21','14','34','123','12','13','13','53','dinner');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','chicken buritto','hxy','123','41234','231','123','123','123','1235','1231','10','123','53','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','chicken wings','123','342','3423','64','341','45','324','53453','342','23423','2342','2342','lunch');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','butter chicken','34','232','343','532','234','3443','353','3423','23423','32','324','43','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','vanilla latte','234','3423','43','23432','324','234','234','234','324','342','234','234','breakfast');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES
('10','random food','234','234','342','3424','53','2','23','2342','23','23','234','sql sucks','snacks');
INSERT INTO `food` (`userid`,`food_name`,`brand_name`,`calories`,`total_fat`,`saturated_fat`,`cholesterol`,`sodium`,`carbohydrates`,`fiber`,`sugars`,`proteins`,`potassium`,`photo`,`meal_time`) VALUES 
('10','gummy bears','234','23','43','32','3242','23','32','342','2342','234','423','23','snacks');


INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('1', 'biceps','100','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('2', 'triceps','120','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('3', 'running','200','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('4', 'walking','450','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('5', 'swiming','600','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('6', 'rowing','700','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('1', 'russian crunch','29','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('2', 'burpee','300','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('3', 'crunch','30','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('4', 'wall sit','45','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('5', 'squat','160','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('6', 'lunge','240','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('1', 'plank','459','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('2', 'push ups','456','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('3', 'bicycle','890','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('4', 'biceps','100','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('5', 'triceps','120','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('6', 'running','200','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('1', 'walking','450','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('2', 'swiming','600','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('3', 'rowing','700','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('4', 'russian crunch','29','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('5', 'burpee','300','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('6', 'crunch','30','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'wall sit','45','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'squat','160','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'lunge','240','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'plank','459','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'push ups','456','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'bicycle','890','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'biceps','100','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'triceps','120','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'running','200','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'walking','450','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'swiming','600','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'rowing','700','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'russian crunch','29','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'burpee','300','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'crunch','30','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'wall sit','45','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'squat','160','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'lunge','240','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'plank','459','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'push ups','456','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'bicycle','890','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'biceps','100','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'triceps','120','no link','weights');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'running','200','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'walking','450','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'swiming','600','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'rowing','700','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'russian crunch','29','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('7', 'burpee','300','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('8', 'crunch','30','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('9', 'wall sit','45','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('10', 'squat','160','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('1', 'lunge','240','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('2', 'plank','459','no link','fitness');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('3', 'push ups','456','no link','cardio');
INSERT INTO `exercise` (`userid`,`user_input`,`calories`,`photo`,`category`) VALUES
('4', 'bicycle','890','no link','cardio');



-- use mysql -u root < server/schema.sql to load dummy data

