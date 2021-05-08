import { utilService } from '../util-service.js'
import { storageService } from '../storage-service.js'
import { keepData } from '../data/keep.data.js'

export const keepService = {
    query,
    getNoteById,
    addNote,
    removeNote,
    toggleIsPinned,
    toggleIsEditMode,
    searchNote,
    updateNote,
    toggleTodo,
    updateNoteStyle
}

var gNotes = []
const STORAGE_KEY = 'notes'
_createNotes()

// center func , return the notes from DB 
function query(sortBy) {
    return Promise.resolve(_sortByPinned(gNotes))
}

// sort by pinned func
function _sortByPinned(notes) {
    return notes.sort((noteA, noteB) => {
        return (noteA.isPinned === noteB.isPinned) ? 0 : noteA.isPinned ? -1 : 1
    })
}

// CRUD func area
function addNote(txt, type) {
    var note = {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        style: { backgroundColor: utilService.getRandomColor() },
        isEditMode: false
    }
    note.info = _setInfoByType(type, txt)
    gNotes.unshift(note);
    _saveNotesToStorage();
}

// helper func to set note info by note type
function _setInfoByType(type, txt) {
    switch (type) {
        case 'text':
            return { txt }
        case 'list':
            var todosTxt = txt.split(',')
            return {
                lable: 'New list',
                todos: todosTxt.map((todo) => {
                    return { txt: todo, doneAt: null }
                })
            }
        case 'img':
            return { title: 'New image', url: txt }
        case 'video':
            return { title: 'New video', url: txt }
        case 'sound':
            return { title: 'file sound', url: txt }
    }
}

function removeNote(noteId) {
    var noteIdx = getNoteIdxById(noteId)
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage()
    return Promise.resolve()
}

function updateNote(note, isLable) {
    var noteIdx = getNoteIdxById(note.id)
    gNotes.splice(noteIdx, 1, note)
    if (note.type !== 'list' || isLable) toggleIsEditMode(note.id)
    _saveNotesToStorage()
    return Promise.resolve()
}

function updateNoteStyle(color, noteId) {
    var noteIdx = getNoteIdxById(noteId)
    gNotes[noteIdx].style = { backgroundColor: color }
    _saveNotesToStorage()
    return Promise.resolve()
}

// search note func
function searchNote(searchTxt) {
    var notes = gNotes.filter((note) => {
        return _getSearchNote(note, searchTxt)
    })
    if (!notes) return Promise.resolve(gNotes)
    return Promise.resolve(notes)
}

function _getSearchNote(note, searchTxt) {
    switch (note.type) {
        case 'text':
            return note.info.txt.toUpperCase().includes(searchTxt)
        case 'sound':
            return note.info.title.toUpperCase().includes(searchTxt) ||
                note.info.url.toUpperCase().includes(searchTxt)
        case 'video':
            return note.info.title.toUpperCase().includes(searchTxt) ||
                note.info.url.toUpperCase().includes(searchTxt)
        case 'img':
            return note.info.title.toUpperCase().includes(searchTxt) ||
                note.info.url.toUpperCase().includes(searchTxt)
        case 'list':
            return note.info.lable.toUpperCase().includes(searchTxt) || _searchInList(note, searchTxt)
    }
}

function _searchInList(note, searchTxt) {
    var x = note.info.todos.filter((todo) => {
        return todo.txt.toUpperCase().includes(searchTxt)
    })
    if (x.length === 0 || !x) return false
    return true
}

// geters func area 
function getNoteById(noteId) {
    var currNote = gNotes.find((note) => {
        return note.id === noteId
    })
    return Promise.resolve(currNote)
}

function getNoteIdxById(noteId) {
    return gNotes.findIndex((note) => {
        return note.id === noteId
    })
}

// toggel func
function toggleIsPinned(noteId) {
    return Promise.resolve(
        getNoteById(noteId)
            .then((note) => {
                note.isPinned = !note.isPinned
                return note
            })
    )
}

function toggleIsEditMode(noteId) {
    return Promise.resolve(
        getNoteById(noteId)
            .then((note) => {
                note.isEditMode = !note.isEditMode
                return note
            })
    )
}

function toggleTodo(todoIdx, note) {
    var noteIdx = getNoteIdxById(note.id)
    var todo = note.info.todos[todoIdx]
    todo = { txt: todo.txt, doneAt: (!todo.doneAt) ? Date.now() : null }
    note.info.todos.splice(todoIdx, 1, todo)
    gNotes.splice(noteIdx, 1, note)
    _saveNotesToStorage()
    return Promise.resolve()
}

// load db func
function _createNotes() {
    gNotes = _loadNotesFromStorage()
    if (!gNotes || gNotes.length === 0) {
        gNotes = []
        var notes = keepData.getNotes();
        for (var i = 0; i < notes.length; i++) {
            gNotes.unshift(notes[i])
        }
        gNotes = utilService.arrayShuffle(gNotes)
    }
    _saveNotesToStorage();
}

// storage func area
function _saveNotesToStorage() {
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}



// function query(filterBy, sortBy) {
//     if (filterBy) {
//         if (!sortBy) return Promise.resolve(_sortByPinned(filterMails(filterBy)))
//         else {
//             var filteredMails = filterMails(filterBy)
//             var sortedMailes = sortMailes(filteredMails, sortBy)
//             return Promise.resolve(_sortByPinned(sortedMailes))
//         }
//     }
//     return Promise.resolve(_sortByPinned(gNotes))
// }