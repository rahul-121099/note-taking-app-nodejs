// const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

//handler is a actual code snippet that will execute in the cli
//Create a command for adding note
yargs.command({
    command : "addNote",
    description : "Adds a new note",
    builder : {
        title : {
            describe : "note title to add",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note body to add",
            demandOption : true,
            type: 'string'
        }
    },
    handler : function (argv){
        notes.addNote(argv.title, argv.body);
    }
});

//Create a command for removing the note
yargs.command({
    command : "removeNote",
    description : "removes a note",
    builder : {
        title :{
            describe : "note title to remove",
            demandOption : true,
            type : 'string'
        }
    },
    handler : function (argv){
        notes.removeNote(argv.title);
    }
});

//Create command for the list of notes
yargs.command({
    command : "listNote",
    description : "shows the list of noted",
    handler : function (){
        notes.listNote();
    }
});

//Create command for reading a note
yargs.command({
    command : "readNote",
    description : "reads a note",
    builder: {
        title : {
            demandOption : true,
            type: 'string'
        }
    },
    handler : function (argv){
        notes.readNotes(argv.title);
    }
});

// console.log(yargs.argv);
yargs.parse();
// console.log(chalk.red.bold.underline("error"))
// console.log(process.argv);
 


// console.log(validator.isEmail("abc@gmail.com"));


