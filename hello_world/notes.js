console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {

};

const saveNotes = (notes) => {

};

const addNote = (title, body) => {
  // console.log('Adding note', title, body);
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const noteString = fs.readFileSync('notes-data.json', 'utf8');
    // console.log('notesSrting: ', noteString);
    notes = JSON.parse(noteString);
    // console.log('notes: ', notes);
  } catch (err) {
    // console.log(err);
  }

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    // console.log('notes: ', notes);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  // console.log('Getting all notes.');
};

const getTitle = (title) => {
  console.log('Getting this ', title);
};

const removeTitle = (title) => {
  console.log('Removing this', title);
};

module.exports = {
  addNote, // ES6 syntax; ': addNote' // in ES5
  getAll,
  getTitle,
  removeTitle
};
