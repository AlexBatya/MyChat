CREATE TABLE `chat`(
	`user` VARCHAR(255) NOT NULL,
	`message` VARCHAR(255) NOT NULL
);

CREATE TABLE `user` (
	`id` INT NOT NULL auto_increment PRIMARY KEY, 
	`name` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL
);
