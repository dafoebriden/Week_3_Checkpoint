import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js"





function _drawNotes() {
    const notes = AppState.notes
    let htmlString = ''
    notes.forEach(note => htmlString += note.ListHTMLTemplate)
    setHTML('note', htmlString)
}

function _drawActiveNote() {
    const note = AppState.activeNote
    if (!note) {
        return setHTML('activeNote', '<div class="text-center">create or pick a note from the sidebar</div>')
    }
    setHTML('activeNote', note.ActiveNoteHTMLTemplate)

}

export class NotesController {
    constructor() {
        _drawNotes()
        AppState.on('notes', _drawNotes)
        AppState.on('activeNote', _drawActiveNote)
    }
    setActiveNote(noteId) {
        notesService.setActiveNote(noteId)
    }
    updateNote() {
        const textAreaElement = document.getElementById('noteBody');
        const updatedNoteBody = textAreaElement.value

        notesService.updateNote(updatedNoteBody);


    }

    createNote() {
        try {
            event.preventDefault()
            const form = event.target
            const noteFormData = getFormData(form)
            notesService.createNote(noteFormData)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    deleteNote() {

        const wantsToRemove = window.confirm('Are you sure you want to delete this note?')

        if (!wantsToRemove) {
            return
        }
        notesService.deleteNote()
    }
}