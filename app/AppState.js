import { Note } from './models/Notes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Note[]} */
  notes = []


  /** @type {Note | null} */
  activeNote = null
}
export const AppState = createObservableProxy(new ObservableAppState()) 