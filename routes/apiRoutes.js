const router = require('express').Router();
const { notes } = require('../db/db.json');
const { createNote, validateNote } = require('../db/note');

// GET Routes
router.get('/notes', (req, res) => {
    res.json(notes);
})

// POST Routes
router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('title and text cannot be blank')
    }
    else {
    res.json(createNote(req.body, notes));
    }
})

// DELETE Routes
router.delete('/notes/:id', (req, res) => {})

module.exports = router;