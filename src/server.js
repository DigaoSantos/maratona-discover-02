const express = require("express");
const server = express();
const routes = require("./routes")

//usar template engine
server.set('view engine', 'ejs')

//habilita arquivos statics
server.use(express.static("public")) 

//routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))