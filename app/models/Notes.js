import { generateId } from "../utils/GenerateId.js"

export class Note {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title || 'New Note'
        this.bgStyle = data.bgStyle || 'bg-white'
        this.body = data.body || ''
        this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
        this.lastAccessed = data.lastAccessed ? new Date(data.lastAccessed) : new Date()
        this.words = data.body.split(' ').length
        this.characters = data.body.length
    }

    get ListHTMLTemplate() {
        return `
        <div class="d-flex align-items-center">
            <i class="mdi mdi-circle"></i>
            <div onclick="app.NotesController.setActiveNote('${this.id}')" class="d-flex border border-2 border-light rounded bg-danger m-3 p-2" type="button">
                <span id="Title" class="fw-bold me-2">${this.title}</span>
                <span id="dateCreated">${this.CreatedAtDate}</span>
            </div>
        </div>
    `

    }
    get ActiveNoteHTMLTemplate() {
        return `
        <div class="col-10 border shadow-light rounded bg-dark m-4 p-0">
            <div class="d-flex justify-content-between rounded text-light mx-5 my-3 p-2" style="width: %">
                <div class="d-flex align-items-center border border-2 border-light rounded p-2">
                    <span>
                        <h2 class="m-0 p-0">${this.title}</h2>
                    </span>
                </div>
                <div class="d-flex flex-column border border-2 border-light rounded p-2">
                    <div class="d-flex">
                        <span class="me-2">Words: ${this.words}</span>
                        <span>Characters: ${this.characters}</span>
                    </div>
                    <span>Last updated:${this.LastAccessedDate, this.LastAccessedTime}</span>
                </div>
                <div class="d-flex justify-content-center mb-4 m">
                    <textarea id="NoteTextArea" class=" shadow-light rounded m-0 p-1" style="width: 90%;" name="body"
                        id="NoteTextArea" rows="20" placeholder=" Your Notes Here"></textarea>
                </div>
            </div>
        </div>
    `
    }

    get CreatedAtTime() {
        return this.createdAt.toLocaleTimeString()
    }

    get CreatedAtDate() {
        return this.createdAt.toLocaleDateString()
    }
    get LastAccessedTime() {
        return this.lastAccessed.toLocaleTimeString()
    }

    get LastAccessedDate() {
        return this.lastAccessed.toLocaleDateString()
    }

}