// const yargs = require("yargs");
const fs = require('fs');
const chalk = require('chalk');

//to adding a note
const addNote = function (title, body) {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(function (n_note){
    //     return n_note.title === title;
    // })

    debugger
    
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
        saveNote(notes);
        console.log("note added");
    }else{
        console.log("note title already exists");
    }
    
}

//to save the note
const saveNote = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}

//to load the notes
const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(er){
        return []
    }
}

//displat the list of notes
const listNote = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse.green("Your notes list"));
    
    notes.forEach((note) =>{
        console.log(note.title);
    })
}

//remove note 
const removeNote = function(title){
   const notes = loadNotes();
   const notesToKeep = notes.filter(function (note){
        return note.title !== title;
   })

   if(notesToKeep.length === 0){
        saveNote(notesToKeep);
        console.log(chalk.green("note remved"));
        
        
   }else{
    console.log(chalk.red("note not removed"));
   }
   
}

//read note
const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log("Title: " + note.title);
        console.log("Body: " + note.body);
    }
    else{
        console.log("No not found,can not read note")
    }
}

module.exports = {
    addNote: addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNotes : readNotes
};