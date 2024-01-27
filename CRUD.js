// USE DB
use("Database");
console.log(db);

// Create table/collection
db.createCollection("table1");

// insert into table
db.table1.insertOne({
    name:"abc",
    class:"10",
    section:"a"
});

// insert many into table
db.table1.insertMany([{
    name:"abc",
    class:"10",
    section:"a"
}]);

// find
a=db.table1.find({class:10});
console.log(a.toArray());
b=db.table1.findOne({class:10});
console.log(a);

// Update
// Update method is present but deprecated
// One
db.table1.updateOne({class:10},{$set:{class:11}})
// Many
db.table1.updateMany({class:10},{$set:{class:11}})

// DELETE
db.table1.deleteOne({class:11});
db.table1.deleteMany({class:11});

// MONGO DB OPERATORS