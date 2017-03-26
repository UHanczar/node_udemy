const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

// here yargs stotes args, that we run in array

const commandRequirements = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
};
const argv = yargs
.command('add', 'Add a new note', {
  title: commandRequirements.title,
  body: commandRequirements.body
})
.command('list', 'List of notes')
.command('read', 'Read a note', {
  title: commandRequirements.title
})
.command('remove', 'Removes a note', {
  title: commandRequirements.title
})
.help()
.argv;
const command = argv._[0];
console.log('Commnad: ', command);
// console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
  console.log('Adding new note.');
  const note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  console.log('To print listing of notes');
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'get') {
  console.log('Fetching note');
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Note is found');
    notes.logNote(note);
  } else {
    console.log('Not was not found.');
  }
} else if (command === 'remove') {
  console.log('Removing node');

  const noteRemoved = notes.removeTitle(argv.title);
  const message = noteRemoved ? 'The note was removed.' : 'The note was not found.';
  console.log(message);
} else if (command === 'removeAll') {
  console.log('Removing all notes');
  const emptyList = notes.removeAll();
  console.log(emptyList);
} else {
  console.log('Command not recognized');
}
