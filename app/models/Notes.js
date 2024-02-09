import { generateId } from "../utils/GenerateId.js"

export class Notes {
    constructor (data) {
        this.id = data.id || generateId()
        this.title = data.title || 'New Note'
        this.color = data.color || 'black'
        this.body = data.body || ''
        this.createdAt = data.createdAt
        this.lastAccessed = data.lastAccessed ? new Date(data.lastAccessed) : new Date()
}

}