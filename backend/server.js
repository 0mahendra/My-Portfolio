const express = require("express")

const app = express();
const cors = require('cors');

app.use(cors());
const MailRoutes = require("./Routes/MailRoutes")
const  port = 5000;
app.use(express.json());

const apiUrl = process.env.REACT_APP_API_URL;

app.get("/" , (req ,res)=>{
     res.send("hello frontend");
});
app.use(`${apiUrl}/api/sendMail` , MailRoutes);
app.listen(port , ()=>{
      console.log(`server is running at Port ${port}`);
})


