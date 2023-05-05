-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema data
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `data` DEFAULT CHARACTER SET utf8 ;
USE `data` ;

-- -----------------------------------------------------
-- Table `data`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `data`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data`.`posts` (
  `idposts` INT NOT NULL AUTO_INCREMENT,
  `postname` VARCHAR(45) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idposts`),
  INDEX `fk_posts_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `data`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
