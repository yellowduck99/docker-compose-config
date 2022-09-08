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