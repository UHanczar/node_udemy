// const obj = {
//   name: 'Uladzimir'
// };
//
// const strUl = JSON.stringify(obj);
// console.log(typeof strUl, strUl);

// const personString = '{"name": "Uladzimir", "age": 32}';
// const person = JSON.parse(personString);
// console.log(typeof person, person);

const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json', 'utf8', (err) => {
  console.log(err);
});
console.log(noteString);
const note = JSON.parse(noteString);
console.log(note);
