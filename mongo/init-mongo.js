db = db.getSiblingDB('db');

db.createUser(
    {
        user    : "USERNAME",
        pwd     : "PASSWORD",
        roles   :[
            {
                role    : "readWrite",
                db      : "db"
            }
        ]
    }
)


