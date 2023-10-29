const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.efkktro.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const brandCollection = client.db("brandDB").collection("brand");
    const memberCollection = client.db("memberDB").collection("member");
    const clientCollection = client.db("clientDB").collection("client");
    const productCollection = client.db("productDB").collection("product");
    const cartCollection = client.db("cartDB").collection("cart");

    // add brands
    // add brand post
    app.post("/addBrands", async (req, res) => {
      const newBrand = req.body;
      const result = await brandCollection.insertOne(newBrand);
      res.send(result);
    });
    // add brand get all
    app.get("/addBrands", async (req, res) => {
      const result = await brandCollection.find().toArray();
      res.send(result);
    });
    // add brand get specific id
    app.get("/addBrands/:id", async (req, res) => {
      const id = req.params.id;
      const result = await brandCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // AddManagement
    // add management post
    app.post("/addManagements", async (req, res) => {
      const newMembers = req.body;
      const result = await memberCollection.insertOne(newMembers);
      res.send(result);
    });
    // add management get
    app.get("/addManagements", async (req, res) => {
      const result = await memberCollection.find().toArray();
      res.send(result);
    });

    // addClients
    // addClients post
    app.post("/addClients", async (req, res) => {
      const newClients = req.body;
      const result = await clientCollection.insertOne(newClients);
      res.send(result);
    });
    // addClients get
    app.get("/addClients", async (req, res) => {
      const result = await clientCollection.find().toArray();
      res.send(result);
    });

    // fourProducts
    // forProducts post
    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });
    // fourProducts get
    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });
    // specific product id
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const result = await productCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    // update product
    app.put("/products/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatesProduct = req.body;
      const product = {
        $set: {
          name: updatesProduct.name,
          brandName: updatesProduct.brandName,
          Product_type: updatesProduct.Product_type,
          price: updatesProduct.price,
          rating: updatesProduct.rating,
          details: updatesProduct.details,
          photoURL: updatesProduct.photoURL,
        },
      };
      const result = await productCollection.updateOne(
        filter,
        product,
        options
      );
      res.send(result);
    });

    // MY CART
    // cart post oparation
    app.post("/cart", async (req, res) => {
      const newCart = req.body;
      const result = await cartCollection.insertOne(newCart);
      res.send(result);
    });
    // cart get
    app.get("/cart", async (req, res) => {
      const result = await cartCollection.find().toArray();
      res.send(result);
    });
    // cart get spesific one
    app.get("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const result = await cartCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // Deleting cart data
    app.delete("/cart/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
