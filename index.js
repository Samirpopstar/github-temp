import express from "express";

const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("Hello Worldsadasdasdasd");
});

app.get("/about", (req,res)=>{
    
})

app.listen(`Server started on port ${port}`);
