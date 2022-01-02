# REST API node + mysql
## Setup
### Install package
```sh 
$ npm install
```

### Enviroiment
```sh
cp .env.example .env
```

### Start App
```sh
npm run start
```


### Database : Run Sql query
```sql
create database todo;
use todo;
CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `email` varchar(191) unique not null,
    `avatar` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `status` tinyint(1) DEFAULT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (name, status, email) VALUES ('Ngô Quyền ', 1, 'quyen.ngo@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Đinh Bộ Lĩnh', 1, 'linh.dinh@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Lý Thường Kiệt', 1, 'kiet.ly@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Trần Hưng Đạo', 1, 'dao.tran@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Nguyễn Huệ', 1, 'hue.nguyen@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Võ Nguyên Giáp', 1, 'giap.vo@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Nguyễn Chí Thanh', 1, 'thanh.nguyen@cryptopie-labo.com');
INSERT INTO `users` (name, status, email) VALUES ('Lê Trọng Tấn', 1, 'tan.le@cryptopie-labo.com');
```


### Reference
- [CRUD Nodejs with MySQL](https://freetuts.net/insert-update-delete-select-mysql-trong-nodejs-2293.html)
