## Базы данных
В данном проекте используется база данных SQL, а в качестве СУБД - MySQL. Перед началом работы с проектом убедитесь, что MySQL установлена на вашем компьютере. Затем создайте базу данных:

```CREATE DATABASE crompol;```

После этого выгрузите таблицы из файла crompol.sql с помощью следующей команды:

```mysql -u root -p crompol < /path/to/crompol/crompol.sql```

где /path/to/crompol - путь к директории, где находится файл crompol.sql.

## ```config/localhost.json```

```json
{
    "server": {
    "token": "",
    "PORT": 5003
    },
    "MySQL": {
        "user": "",
        "host": "",
        "password": "",
        "database": ""
    }, 
    "mail": {
        "host": "",
        "port": 465,
        "secure": false,
        "auth": {
            "user": "",
            "pass": ""
        }
    }
}
```
