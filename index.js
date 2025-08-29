const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/info', (req, res) => {
    res.json({
        name: 'web todo app',
        description: 'una web que me permita registrar tareas y luego marcarlas como realizadas',
        version: '1.0.0'
    });
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
