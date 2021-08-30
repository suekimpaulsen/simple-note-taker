const router = require('express').Router();
const { notes } = require('../db/db.json');
const { createNote, validateNote, readNote } = require('../db/note');

// GET Routes
router.get('/notes', (req, res) => {
    const readNote = readNote();
    const parsedNote = JSON.parse(readNote);
    res.json(parsedNote.notes);
})

// POST Routes
router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('title and text cannot be blank')
    }
    else {
    createNote(req.body, notes);
    res.json(notes);
    }
})

// DELETE Routes
router.delete('/notes/:id', (req, res) => {})

module.exports = router;