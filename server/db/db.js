import { MongoClient } from "mongodb";

const uri = "<connection string>";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const database = client.db("booksReview");
    const collection = database.collection("books");


    const document = await collection.findOne({});
    console.log("Found document:", document);
  } catch (err) {
    console.error("An error occurred connecting to MongoDB: ", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

