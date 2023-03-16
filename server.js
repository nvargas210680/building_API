import express from "express";

const app = express();
const PORT = 5050;

app.get("/users", (request, response)=> {
     
})



app.post("/users", (request, response) => {

})


app.get("/users/:id", (request, response)=> {

})


app.post("/users/:id", (request, response) => {

})


app.delete("/users/id:", (requst, response) => {

})



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})