import { generateId } from "../utils/GenerateId.js"

export class Note {
    constructor(data) {
        this.id = data.id || generateId()
        this.title = data.title
        this.bgStyle = data.bgStyle || '0x000000'
        this.noteBody = data.noteBody || ''
        // TRUTHY VS FALSY
        // mdn truthy
        // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
        // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
        this.lastAccessed = new Date()
        this.characters = this.noteBody.length;
        this.words = this.noteBody ? this.noteBody.split(' ').length : 0;
    }

    get ListHTMLTemplate() {
        return `
        <div class="d-flex align-items-center">
            <i class="mdi mdi-circle"></i>
            <div onclick="app.NotesController.setActiveNote('${this.id}')" class="d-flex border border-2 border-light rounded m-3 p-2" type="button" style="background-color: ${this.bgStyle}; color:${this.invertedBgStyle}">
                <span id="title" class="fw-bold me-2">${this.title}</span>
                <span id="createdAt">${this.CreatedAtDate}</span>
            </div>
        </div>
    `

    }
    get ActiveNoteHTMLTemplate() {
        return `
        <div class="col-10 border shadow-light rounded bg-dark m-4 p-0">
            <div class="d-flex flex-column justify-content-between rounded mx-5 my-3 p-2">
                <div class="d-flex justify-content-between mb-3 text-light">
                    <div class="d-flex align-items-center p-2" >
                        <span style="color:${this.invertedBgStyle};background-color:${this.bgStyle}">
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
                </div>
                <div class="d-flex justify-content-center mb-4 m">
                    <textarea onblur="app.NotesController.updateNote()" id="noteBody" class="shadow-light rounded m-0 p-1" style="width: 90%;" value="noteBody" name="noteBody"
                        rows="20" placeholder="Your Notes Here">${this.noteBody}</textarea>
                </div>
                <button class="btn btn-danger w-25" onclick="app.NotesController.deleteNote()">Delete Note</button>
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
    get invertedBgStyle() {
        let color = this.bgStyle.slice(1);
        let invertedColor = (0xFFFFFF ^ parseInt(color, 16)).toString(16);
        invertedColor = '#' + ('000000' + invertedColor).slice(-6);
        return invertedColor;
    }
}
