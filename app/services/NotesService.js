import { AppState } from "../AppState.js";
import { Note } from "../models/Notes.js";
import { loadState, saveState } from "../utils/Store.js";


function _saveNotesInLocalStorage() {
    saveState('notes', AppState.notes)
}

class NotesService {
    createNote(noteFormData) {
        const newNoteModel = new Note(noteFormData)
        AppState.notes.push(newNoteModel)
        _saveNotesInLocalStorage()

    }

    loadNotesFromLocalStorage() {
        const loadNotesFromLocalStorage = loadState('notes'[Note])
        AppState.notes = loadNotesFromLocalStorage
    }

    removeNote(noteId) {
        const noteIndex = AppState.notes.findIndex(note => note.id === noteId)
        if (noteIndex === -1) {
            throw new Error('you messed something up, check your conditional for findindex')
        }
        AppState.notes.splice(noteIndex, 1)
        _saveNotesInLocalStorage()
    }

}



export const notesService = new NotesService()