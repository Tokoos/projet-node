const mongoose =require('mongoose');

mongoose.connect(
    "mongodb://mongodb.net.localhost:27017",
    {useNewUrlparser: true , useUnifiedtopogy: true },
    (err) => {
        if (!err) console.log("mogoodb connected");
        else console.log(" connection error:" + err);
    }
  
)



