
CREATE TABLE `lottery` (
	`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`quantity_of_numbers` INT NOT NULL,
	`prize` VARCHAR(255) NOT NULL
);

-- Таблицы которые будут создаватся при создании и заполнятся в процессе розыгрыша

CREATE TABLE `lottery_id`(
	`id_user` INT NOT NULL,
	`purchased_numbers` INT,

);

-- Таблица с номерками от одного розыгрыша

CREATE TABLE `number_id` (
	`id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` INT NOT NULL,
	`status` VARCHAR(255) NOT NULL
);
