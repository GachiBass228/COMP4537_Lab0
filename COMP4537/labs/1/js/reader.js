import { NoteEntity } from './NoteEntity.js';

const displayArea = document.getElementById('display-area');
const timeSpan = document.getElementById('time');

function fetchNotes() {
    const rawData = localStorage.getItem('notes');
    const savedData = JSON.parse(rawData || "[]");
    const notes = savedData.map(item => new NoteEntity(item.content));
    
    displayArea.innerHTML = "";
    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note-display';
        div.innerText = note.content || "(Empty Note)";
        displayArea.appendChild(div);
    });

    timeSpan.innerText = new Date().toLocaleTimeString();
}

setInterval(fetchNotes, 2000);
fetchNotes();