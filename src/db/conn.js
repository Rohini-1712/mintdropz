const mongoose = require('mongoose');
//const url ="mongodb+srv://rohinijadhav:<password>@cluster0.exh0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const url ="mongodb+srv://rohinijadhav:6MDe0Lvwwo6AB6PA@cluster0.exh0n.mongodb.net/posts?retryWrites=true&w=majority";
const connectionparams ={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionparams).then(()=>{
    console.log("connected to the database");
}).catch((e)=>{
    console.log(e);
})