const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const cLog = require('../helpers/cLog'); /*for logging time*/
const mysql = require('mysql2');
const Note = require('../models/Note');

// Connect to database
/*const db = mysql.createConnection(
  {
  host: 'localhost',
  // MySQL username,
  user: 'root',
  // MySQL password
  password: '',
  database: 'note_db'
  },
  console.log(`Connected to the notes_db database.`)
); */ 


// API!
// GET Route for retrieving all the notes
notes.get('/', async (req, res) => {
  // Log our request to the terminal
  cLog(`${req.method} request received to get notes`);
  const noteData = await Note.findAll();

  // Return the bookData promise inside of the JSON response
  return res.json(noteData);
});



// POST request to add a new Note
notes.post('/', async (req, res) => {
  // Log that a POST request was received
  cLog(`${req.method} request received to add a note`);

  // Destructuring assignment for the items in req.body
  const noteData = await Note.create(req.body);
  await console.log(noteData);

  return res.json(noteData);
});


// DELETE request to delete a Note
notes.delete('/:id', async (req, res) => {
  // Log that a POST request was received
  cLog(`${req.method} request received to delete a note`);

  const noteData = await Note.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(noteData);

});


// UPDATE request to upate a Note
notes.put('/:id', async (req, res) => {
  // Log that a POST request was received
  cLog(`${req.method} request received to update a note`);
  const noteData = await Note.update(
    {
      title: req.body.title,
      text: req.body.text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  return res.json(noteData);  
});







module.exports = notes;
