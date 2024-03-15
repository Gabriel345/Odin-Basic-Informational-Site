const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

const publicDirectoryPath = path.join(__dirname, 'public');


app.use(express.static(publicDirectoryPath));


app.get('/', (req, res) => {
    
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});
app.get('/about', (req, res) => {
    
    res.sendFile(path.join(publicDirectoryPath, 'about.html'));
});

app.get('/contact-me', (req, res) => {
   
    res.sendFile(path.join(publicDirectoryPath, 'contact-me.html'));
});
app.use((req,res)=>{
    res.status(404).sendFile(path.join(publicDirectoryPath,'404.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});




app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
