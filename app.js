const express = require('express');
const app = express();

//All
app.all('/', (req, res) => {
    console.log("=>all", req.method);
    res.send('<h1>Hello Express from home</h1>');
})

//get
app.get('/page2', (req, res) => {
    console.log("=>Get", req.method);
    res.send('<h1>Hello from Get</h1>')
})

//post
app.post('/page3', (req, res) => {
    console.log("=>Post", req.method);
    res.send('<h1>Hello from Post</h1>');
});

//put
app.put('/page4', (req, res) => {
    console.log("=>Put", req.method);
    res.send('<h1>Hello from Put</h1>')
})

//patch
app.patch('/page5', (req, res) => {
    console.log("=>Patch", req.method);
    res.send('<h1>Hello from Patch</h1>')
});

//delete
app.delete('/page6', (req, res) => {
    console.log("=>Delete", req.method);
    res.send('<h1>Hello from Delete</h1>')
})

app.listen(8000, () => {
    console.log(`Server is running at port 8000`);
})