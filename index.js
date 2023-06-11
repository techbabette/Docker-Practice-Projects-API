const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/projects", (req,res) => {
    let data = JSON.parse(fs.readFileSync("data/projects.json"));
    res.status(200);
    res.json(data);
})

// Writing new entries is possible, though not required
// app.post("/projects", (req, res) => {
//     let data = JSON.parse(fs.readFileSync("data/projects.json"));
//     data.push({"Name" : "Test"});
//     fs.writeFileSync("data/projects.json", JSON.stringify(data));
//     res.json(data);
// })

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));


