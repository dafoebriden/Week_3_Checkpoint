import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML } from "../utils/Writer.js"


function _drawNotes() {
    const notes = AppState.notes
    let htmlString = ''
    notes.forEach(note => htmlString += note.ListHTMLTemplate)
    setHTML('notesList', htmlString)
}

function _drawActiveNote() {
    const note = AppState.activeNote
    setHTML('activeNote', note.ActiveNoteHTMLTemplate)
}

export class NotesController {
    constructor() {
        _drawNotes()
        AppState.on('notes', _drawNotes)
        AppState.on('activeNote', _drawActiveNote)
    }
    setActiveNote(noteId) {
    }

    updateNote() {
        const noteElement = document.getElementById('NoteTextArea')

        const updateNoteBody = noteElement.value
        notesService.updateNote(updateNoteBody)
    }

}