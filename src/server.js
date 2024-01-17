const express = require("express");
const app = express();
app.use(express.json())


app.post("/",(request, response)=>{
  const {name, email, password} = request.body
  response.json({ name, email, password })
})

const PORT = 3333;
app.listen(PORT,()=>console.log(`the server is listening on port ${PORT}`))
