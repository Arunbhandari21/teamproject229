const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://chetanpal466:8848Everest@cluster0.lvwpcvj.mongodb.net/?retryWrites=true&w=majority'; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('your_database_name');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = connectDB;
