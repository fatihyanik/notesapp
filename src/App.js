import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	{/*this are the states for notes*/}
	const [notes, setNotes] = useState([]);

	{/*this are the states for searching text*/}
	const [searchText, setSearchText] = useState('');

	{/*this are the states for toggle mode*/}
	const [darkMode, setDarkMode] = useState(false);

	{/*to store or save the data in local storage even after closing the tab*/}
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	{/*this is for saving the app data in local storage*/}
	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	{/*this function is for adding new note*/}
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	{/*this function is for deleting notes in note app with a id*/}
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;