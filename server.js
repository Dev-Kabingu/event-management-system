const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Mock data storage
let events = [];

// Get all events
app.get('/api/events', (req, res) => {
    res.json(events);
});

// Add a new event
app.post('/api/events', upload.single('image'), (req, res) => {
    const event = {
        id: events.length,
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        ticket: req.body.ticket,
        time: req.body.time,
        date: req.body.date,
        image: req.file ? req.file.buffer.toString('base64') : null
    };
    events.push(event);
    res.json(event);
});

// Edit an event
app.put('/api/events/:id', upload.single('image'), (req, res) => {
    const eventId = parseInt(req.params.id);
    const event = events.find(e => e.id === eventId);
    if (event) {
        event.name = req.body.name;
        event.description = req.body.description;
        event.location = req.body.location;
        event.ticket = req.body.ticket;
        event.time = req.body.time;
        event.date = req.body.date;
        event.image = req.file ? req.file.buffer.toString('base64') : event.image;
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});

// Delete an event
app.delete('/api/events/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    events = events.filter(e => e.id !== eventId);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
