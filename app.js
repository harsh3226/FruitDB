const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } );

const fruitSchema = new mongoose.Schema({
  name:String,
  price: Number,
  review: String
});


const Fruit= mongoose.model('Fruit', fruitSchema);

const fruit=new Fruit({
  name: "Apple",
  price: 25,
  review: "Pretty Tasty"
});


const perschema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person" , perschema);

const person = new Person({
  name: "John",
  age: 29

});

person.save();


const kiwi=new Fruit({
  name: "Kiwi",
  price: 225,
  review: "New Zelander"
});
const apricot=new Fruit({
  name: "Apricot",
  price: 235,
  review: "Py Tasty"
});

// Fruit.insertMany([kiwi ,apricot], function(err)
// {
//   if(err)
//   console.log(err);
//   else{
//   console.log("Successfully Done");
//   }
// })

Fruit.find(function(err,fruits)
{
  if(err)
  console.log("Error");
  else {
    console.log(fruits);
  }
})

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
