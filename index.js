// a web server 

const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();


// end point 
app.get('/', (req, res) => {
    res.send("<h1>App is working.. On to the next task</h1>")
});
// Sets up a clean error message 
//   if you are wondering about 
//   your server not loading 
app.listen(PORT, () => {
    console.log('Server running at localhost at:' + PORT );
}).on('error', (err) => {
    console.log('server Error:', err.message);
    console.log('Do you already have a server running on PORT', + PORT)

})