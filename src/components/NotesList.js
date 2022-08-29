import React from 'react'
import AddNote from './AddNote';
import Note from './Note'
{/* this component is storing the notes in a format*/}
function NotesList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='notes-list'>
         {/*here we are going to use .map to make each note card from notes
        and also passing the functions and other states as propas*/}
       {notes.map((note, index)=>(
        <Note key={index} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
       ))}
       <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList;