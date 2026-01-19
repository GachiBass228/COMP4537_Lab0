import { NoteEntity } from './NoteEntity.js';

const notesList = document.getElementById('notes-list');
const timeSpan = document.getElementById('time');

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem('notes') || "[]");
    saved.forEach(data => createNoteUI(data.content));
};

function createNoteUI(text = "") {
    const div = document.createElement('div');
    div.className = 'note-container';
    div.innerHTML = `
        <textarea class="note-text">${text}</textarea>
        <button class="remove-btn">remove</button>
    `;

    div.querySelector('.remove-btn').onclick = () => {
        div.remove();
        saveToStorage();
    };
    
    notesList.appendChild(div);
}

window.addNote = () => {
    createNoteUI();
};

function saveToStorage() {
    const textareas = document.querySelectorAll('.note-text');
    const notesArray = Array.from(textareas).map(ta => new NoteEntity(ta.value));
    localStorage.setItem('notes', JSON.stringify(notesArray));
    timeSpan.innerText = new Date().toLocaleTimeString();
}

setInterval(saveToStorage, 2000);