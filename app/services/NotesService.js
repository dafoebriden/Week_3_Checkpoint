import { AppState } from "../AppState.js";
import { Note } from "../models/Notes.js";
import { loadState, saveState } from "../utils/Store.js";




function _saveNotes() {
    saveState('notes', AppState.notes)
    saveState('activeNote', AppState.activeNote)
}

function _loadNotes() {
    const notesFromLocalStorage = loadState('notes', [Note])
    AppState.notes = notesFromLocalStorage
}

class NotesService {

    constructor() {
        _loadNotes()
    }
    setActiveNote(noteId) {
        const foundNote = AppState.notes.find(note => note.id == noteId)
        AppState.activeNote = foundNote
    }

    updateNote(updateNoteBody) {
        const activeNote = AppState.activeNote
        activeNote.body = updateNoteBody
        activeNote.lastAccessed = new Date()
        activeNote.words = updateNoteBody.split(' ').length
        activeNote.characters = updateNoteBody.length
        _saveNotes()
        AppState.emit('activeNote')
    }
    createNote(noteFormData) {
        const newNote = new Note(noteFormData)
        AppState.notes.push(newNote)
        _saveNotes()
    }
}


export const notesService = new NotesService()
