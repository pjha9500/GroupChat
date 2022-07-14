const express=require('express');
const app=express();
const fs=require('fs');
fs.appendFileSync('messages.txt','');

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));

app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input id="username" type="text" name="username"><button type="submit">add</button></form>')
})

app.post('/',(req,res,next)=>{
    let x=req.body.username+':'+req.body.message+'\n';
    fs.appendFileSync('messages.txt',x);
    res.redirect('/');
    
})
app.get('/',(req,res,next)=>{
    const data=fs.readFileSync('messages.txt').toString();
    console.log(data);
    res.write(`<h1>Chats-</h1>`);
    res.write(`${data}`);
    res.write(`<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" id="message" name="message"></input><input type="hidden" id="username" name="username"></input><button type="submit">SEND msg</button></form>`);
    res.send()
})








app.listen(3000);






// app.get('/login',(req,res,next)=>{
//     res.send('<form  action="/" method="POST" onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"><input type="text" name="username" id="username"><button type="submit">Submit</button></form>')
// })
// app.post('/',(req,res,next)=>{
//     console.log(req.body);
//     res.send('<form action="/" method="POST"><input type="text"></input><button type="submit">SEND</button></form>')
//     res.redirect('/');
// })
// app.get('/',()=>{
//     res.send('<form action="/" method="POST"><input type="text"></input><button type="submit">SEND</button></form>')

// })

// app.use('/login',(req,res,next)=>{
//     res.send('<form  action="/" method="POST" onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"><input type="text" name="username" id="username"><button type="submit">Submit</button></form>')
// })
// app.post('/',(req,res,next)=>{
//     console.log(Object.assign({},req.body));
//     res.send('<form action="/"><input type="message" id="message"></input><input type="hidden" id="username" name="username"></input><button type="submit">Send</button></form>')
// })

// app.get('/',(req,res,next)=>{
//     console.log('in the midleware');
// res.send("HELLO");
// });
    





    
    
// })