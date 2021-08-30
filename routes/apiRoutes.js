const router = require('express').Router();
const store = require('../db/note');

// GET Routes
router.get('/notes', (req, res) => {})

// POST Routes
router.post('/notes', (req, res) => {})

// DELETE Routes
router.delete('/notes/:id', (req, res) => {})

module.exports = router;