const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("This is a list of the greatest projects!");
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));


