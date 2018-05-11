// a web server 
const cors = require('cors');
const { resolve } = require('path')
const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(resolve(__dirname, "client", 'dist')));



app.post('/api/send-data', (req, res) => {
    console.log('data sent:', req.body);

    res.send({sucess: true, mirror: req.body});
});

app.get('/api/user-data', (req,res) => {
    const user = {
        name: 'Jim Bob',
        email: 'jimbob@mail.me'
    }
    res.send(user);
});

app.get("/api/get-article", (req, res) => {
    const article =  {
        title: "Some Awesome ARticle",
        author: "Johnny Waler",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, numquam quisquam. Nobis quam provident deserunt officia quo dicta, distinctio veniam obcaecati non. Iste sit repellat error reprehenderit eius, vel iure!"
    };
    res.send(article);
})


// end point 
app.get('*', (req, res ) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'))
})
// Sets up a clean error message 
//   if you are wondering about 
//   your server not loading 
app.listen(PORT, () => {
    console.log('Server running at localhost at:' + PORT );
}).on('error', (err) => {
    console.log('server Error:', err.message);
    console.log('Do you already have a server running on PORT', + PORT)

})