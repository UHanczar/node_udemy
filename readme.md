object: 'global', 'process.exit(0)';
v8 engine is a js engine, written in a C++ language. It takes js code & compiles it in js code.

run files: node fileName.js

nodemon file.ext // refresh app on save
process.argv // global object in node with deals with processes - argv - arguments vector (array) - list of processes

--save // we need it, because without it package doesn't install to pacakge.json

node app.js add --title=secret --body="This is my secret."

--for debugging
/////
node debug app.js
////
node inspect app.js

--then options: n (or next) // c (or continue to the end of program) // repl (or node console)

--request module helps to get queries

node wether_app\app.js --address "1602 lombard street philadephya"

-- encodeURIComponent - helps to retch data from string to url
--decodeURIComponent -makes oppiset
