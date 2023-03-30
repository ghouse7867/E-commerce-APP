// var express = require("express");
// var cors = require("cors");
// var mongoClient = require("mongodb").MongoClient;
// var connectionString = 'mongodb://127.0.0.1:27017';
// var app = express();

// app.get('/getusers', (req, res)=>{
//   mongoClient.connect(connectionString, (err, clientObj)=>{
//     if(!err){
//       var database = clientObj.db('reactdc');
//       database.collection('dcusers').find({}).toArray((err, document)=>{
//         if(!err){
//          res.send(document);
//         }
//       }) 
//     }
//   })
// });
// app.listen(6000, () => {
//   console.log(`Server Started at ${6000}`)

// })


// // console.log("server started : http://127.0.0.1:4000");
      


//   // the following code examples can be pasted here...
  



// // main()
// //   .then(console.log)
// //   .catch(console.error)
// //   .finally(() => client.close());

const express = require('express');
const cors = require('cors')
const app = express();
const port = 4011; // set the port number

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3002' }));
// app.use(cors());
// app.use(express.urlencoded({
//   extended:true
// }));


app.get('/getusers', async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('reactdc');
    const collection = db.collection('dcusers');
    const docs = await collection.find({}).toArray();
    res.send(docs);
    client.close();
  } catch (err) {
    console.log('Error retrieving data from MongoDB', err);
    res.status(500).send('Error retrieving data from MongoDB');
  } 
  finally {
    res.on('finish', () => {
      console.log("get done")
    });
  }
});


app.post('/adduser', async (req, res) => {

  const userdetails = {
    UserId: req.body.UserId,
    UserName: req.body.UserName,
    Password: req.body.Password,
    Age: req.body.Age,
    Mobile: req.body.Mobile,
    Subscribed: Boolean(req.body.Subscribed)
    
     // using UserId from req.body
  };
  
  try {
    const client = await MongoClient.connect(url);
    const db = client.db('reactdc');
    const collection = db.collection('dcusers');
    const result = await collection.insertOne(userdetails);
    res.send(result);
    client.close();
  } catch (err) {
    console.log('Error inserting data into MongoDB', err);
    res.status(500).send('Error inserting data into MongoDB');
   } 
  finally {
    res.on('finish', () => {
    
      console.log("post done")
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});