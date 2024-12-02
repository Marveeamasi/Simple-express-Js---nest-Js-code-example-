const express = require('express');  
const app = express();  

app.get('/users', (req, res) => {  
    res.send([{ id: 1, name: 'John Doe' }]);  
});  

app.listen(3000, () => console.log('Server running on http://localhost:3000'));  
