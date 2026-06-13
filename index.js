const express= require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'publicc')));


app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
    res.render('index',{files:files});
        
    })
});

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.titlee.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/')
    });
    
})

// dynamic routing
// app.get('/profile/:username',(req,res)=>{
//     res.send(`welcome back ${req.params.username}`);
// });
// app.get('/profile/:kuchbhilikhskteh/:age',(req,res)=>{
//     res.send(`welcome back ${req.params.kuchbhilikhskteh} of age ${req.params.age}`);
// });

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})