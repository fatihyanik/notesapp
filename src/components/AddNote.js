import React, { useState } from 'react'
{/*this component is for adding new note in our notes application*/}
function AddNote({handleAddNote}) {
{/*this noteText is the value for adding Note input*/}
    const [noteText, setNoteText] = useState("");
    {/*here I have fixed the note input limit with 300 characters , but you can change this
    limit*/}
    const characterLimit = 400;
 {/*this function is defined for the onChange event of out adding note input*/}
    const handleChange = (e) => {
         {/*with typing the character limit will change with the input text's length*/}
        if(characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
    }


 {/*this is for saving the new note*/}
    const handleSaveClick = () => {
         {/*if there's no character in input , then we will not save the note*/}
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }


  return (
    <div className='note new'>
         {/*the text area for our input*/}
        <textarea rows="12" cols="14" value={noteText} placeholder='Type to add a note...' onChange={handleChange}></textarea>
        <div className='note-footer'>
            <small>{characterLimit - noteText.length} remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote