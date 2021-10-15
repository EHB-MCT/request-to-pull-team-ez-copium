

const express =  require("express");
const server = express();
const PORT = 3000;
const router = express.Router();
const pg = require('knex')(
    {
        client:'pg',
        connection:{
            host: 'pg',
            port: 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            name: process.env.POSTGRES_NAME
        }
    }
);
server.use('/',router);

owners = {name: "thibaut", age:"21"};

router.route('/')
.get((req, res)=>{
res.send("hello world");
});

router.route('/owner')
.get((req,res) =>{
res.send({name:"thibaut",age:"21"});
})
.post((req, res)=>{
 if(req.body.name && req.body.age){
     owners.push(req,res);
     res.status(200).send();
 }else{
     res.status(400).send();
 }
});


server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});
    