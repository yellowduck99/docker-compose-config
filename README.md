## docker compose config file for database

### 1. mongodb
### 2. mysql

**How to use**
```
cd DIR
sudo docker compose up
```

**How to access DB shell**

*mongodb*
```
sudo docker exec -it mongodb mongo -u 'USERNAME' -p
MongoDB shell version v4.4.14
Enter password:
```

*mysql*
```
sudo docker exec -it mysql mysql -u 'USERNAME' -p
Enter password:
```


**Import data to DB**

*mongodb*

1. create user of db
```
> use DB_NAME
> db.createUser({user:USERNAME,pwd:PASSWORD, roles:[{role:"readWrite", db:DB_NAME}]})
```
2. using mongoimport at terminal
```
mongoimport --uri="mongodb://USERNAME:PASSWORD@localhost:27017/DB_NAME" --collection=COLL_NAME --file xxx.json
```

*mysql*
```
sudo docker exec -i mysql-container mysql -uuser -ppassword name_db < data.sql
```

**Export data from DB**

*mongodb*

using mongoexport at terminal
```
mongoexport --uri="mongodb://USERNAME:PASSWORD@localhost:27017/DB_NAME" --collection COLL_NAME --out xxx.json --forceTableScan
```

*mysql*

Using mysqldump at terminal
```
sudo docker exec mysql-container mysqldump -uuser -ppassword name_db > backup.sql
```