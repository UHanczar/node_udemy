object: 'global', 'process.exit(0)';
v8 engine is a js engine, written in a C++ language. It takes js code & compiles it in js code.

run files: node fileName.js

nodemon file.ext // refresh app on save
process.argv // global object in node with deals with processes - argv - arguments vector (array) - list of processes

--save // we need it, because without it package doesn't install to pacakge.json

node app.js add --title=secret --body="This is my secret."
