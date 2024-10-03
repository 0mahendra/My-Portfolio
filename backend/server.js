const express = require("express")

const app = express();
const MailRoutes = require("./Routes/MailRoutes")
const  port = 5000;
app.use(express.json());

app.get("/" , (req ,res)=>{
     res.send("hello frontend");
});
app.use('/api/sendMail' , MailRoutes);
app.listen(port , ()=>{
      console.log(`server is running at Port ${port}`);
})


