const fs = require('fs');
const path = require('path');
// generate unique id
// const uniqid = require('uniqid');

function createNote(body, noteArray) {
    // body.id = uniqid();
    noteArray.push(body);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );

    return body;
}

function validateNote(notes) {
    if (!notes.title || typeof notes.title !== 'string') {
        return false;
    }
    if (!notes.text || typeof notes.text !== 'string') {
        return false;
    }
    return true;
}

function readNote() {
    fs.readFileSync('db/db.json', 'utf8')
}

module.exports = { createNote, validateNote, readNote };