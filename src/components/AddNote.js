import React, { useState } from 'react'

function AddNote({handleAddNote}) {

    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }


  return (
    <div className='note new'>
        <textarea rows="8" cols="10" value={noteText} placeholder='Type to add a note...' onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote