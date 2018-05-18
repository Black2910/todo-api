const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5afec17f724a3dbc3e912147')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  //
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af8089ca3315c2a74efe8fb')
  }, {
    $set: {
      name: 'Kai'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  })

  // client.close();
});
