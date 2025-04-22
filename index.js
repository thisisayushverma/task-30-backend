import fs from "node:fs";
import express from "express"
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const requestHandler = (req, res,next) => {
    console.log(req.method,req.url);
    next();
}

app.use(requestHandler);

app.post("/submit",(req, res) => {
    const { name, email,message } = req.body;
    // console.log("helloe");
    // console.log(name, email, message);
    // fs.appendFile("./text.txt", `${name},${email},${message} \n`, (err) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(501).json({
    //             message: err.message,
    //             success:false,
    //         })
    //     }

    //     const data = fs.readFileSync("./text.txt", "utf-8");
    //     // console.log(typeof data);
    //     // console.log(data);
       
    // })

    res.status(200).json({
        message: "success",
        success:true,
        data:{
            name,
            email,
            message
        }
    })
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})