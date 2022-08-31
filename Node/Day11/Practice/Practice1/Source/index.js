const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice')
.then(()=>console.log("Connected to MongoDB..."))
.catch(err =>console.error("Not Connected!!!",err))

const firstSchema = new mongoose.Schema({
    name:String,
    country:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    
})
const First = mongoose.model('First',firstSchema);

async function CreateData(){
    const first = new First({
        name:"Akash",
        country:"US",
        tags:['node','bakend'],
       
    })
    
    const result = await first.save();
    console.log(result);
}

async function getData(){
    const first = await First.find({
        name:"jeet",country:"india"
    }).limit(10).sort({name:1}).select({name:1,tags:1})
    console.log(first);
}

async function updateData(id){
    const first = await First.findById(id);
    if(!first) return;

    first.name = "Jeet 2";
    first.tags = ['angular' , 'Frontend'];
    const result = await first.save();
    console.log(result);
}
// updateData("629df8146f4719aac28c1b27");

async function deleteData(id){
    const first = await First.findByIdAndRemove(id);
    console.log(first);
}

deleteData('629df8146f4719aac28c1b27');