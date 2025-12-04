require("dotenv").config({ path: "../config.env" });
const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require("mongodb");

const populateUsers = async () => {
  const users = [
    {
      name: "Tom",
      email: "email@gmail.com",
      password: "123",
    },
    {
      name: "Bernie",
      email: "email2@gmail.com",
      password: "Floppy",
    },
  ];

  const client = new MongoClient(process.env.ATLAS_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log("connected to db!");

    const database = client.db("ShopData");
    const collection = database.collection("Users");

    const seedUsersData = async () => {
      const dbUsers = await users.map((user) => ({
        name: user.name,
        email: user.email,
        password: user.password,
      }));
      return dbUsers;
    };

    const result = await collection.insertMany(await seedUsersData());
    console.log(`${result.insertedCount} items inserted to database!`);
  } catch (e) {
    console.error("Error ", e);
  } finally {
    await client.close();
    console.log("Connection closed");
  }

};

// populateUsers();

const populateProducts = async () => {
  const client = new MongoClient(process.env.ATLAS_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log("connected to db!");

    const database = client.db("ShopData");
    const collection = database.collection("Products");

    const seedProductData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("no data fetched!");
      }
      const products = await response.json();
      const dbProducts = await products.map((item) => ({
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
        rating: item.rating,
      }));
      return dbProducts;
    };

    const result = await collection.insertMany(await seedProductData());
    console.log(`${result.insertedCount} items inserted to database!`);
  } catch (e) {
    console.error("Error ", e);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
};

// populateProducts();
