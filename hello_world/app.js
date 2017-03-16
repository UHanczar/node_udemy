console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

// here yargs stotes args, that we run in array
const argv = yargs.argv;
const command = argv._[0];
console.log('Commnad: ', command);
// console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
  console.log('Adding new note.');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('To print listing of notes');
  notes.getAll();
} else if (command === 'get') {
  console.log('Fetching note');
  notes.getTitle(argv.title);
} else if (command === 'remove') {
  notes.removeTitle(argv.title);
  console.log('Removing node');
} else {
  console.log('Command not recognized');
}
