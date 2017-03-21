const fs = require('fs');

const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync('notes-data.json', 'utf8');
    // console.log('notesSrting: ', noteString);
    return JSON.parse(noteString);
    // console.log('notes: ', notes);
  } catch (err) {
    // console.log(err);
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  // console.log('Adding note', title, body);
  const notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    // console.log('notes: ', notes);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  // console.log('Getting all notes.');
  return fetchNotes();
};

const getNote = (title) => {
  // console.log('Getting this ', title);
  const notes = fetchNotes();
  const note = notes.filter(note => note.title === title);
  return note[0];
};

const removeTitle = (title) => {
  // console.log('Removing this', title);
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote, // ES6 syntax; ': addNote' // in ES5
  getAll,
  getNote,
  removeTitle,
  logNote
};
