CREATE TABLE benefit(
    bid INT(10) AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    company VARCHAR(50),
    target TINYINT,
    category VARCHAR(20),
    detail TEXT,
    start_date VARCHAR(12),
    end_date VARCHAR(12),
    icon_path VARCHAR(50),
    img_path VARCHAR(50),
    link VARCHAR(100),
    PRIMARY KEY(bid)
) default character set utf8;

CREATE TABLE user(
    uid VARCHAR(30),
    pw VARCHAR(550),
    name VARCHAR(20),
    gid VARCHAR(20),
    auth TINYINT,
    is_admin TINYINT,
    target TINYINT,
    email VARCHAR(40),
    tel VARCHAR(15),
    salt VARCHAR(100),
    PRIMARY KEY(uid)
) default character set utf8;

INSERT INTO benefit ()