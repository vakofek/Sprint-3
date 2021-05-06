
import { utilService } from '../util-service.js'
import { storageService } from '../storage-service.js'

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

function query(filterBy, sortBy) {
    if (filterBy) {
        if (!sortBy) return Promise.resolve(_sortByPinned(filterMails(filterBy)))
        else {
            var filteredMails = filterMails(filterBy)
            var sortedMailes = sortMailes(filteredMails, sortBy)
            return Promise.resolve(_sortByPinned(sortedMailes))
        }
    }
    return Promise.resolve(_sortByPinned(gNotes))
}


function _sortByPinned(notes) {
    return notes.sort((noteA, noteB) => {
        return (noteA.isPinned === noteB.isPinned) ? 0 : noteA.isPinned ? -1 : 1
    })
}

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

function addNote(txt, type) {
    var note = {
        id: utilService.makeId(),
        type: type,
        isPinned: false,
        style: { backgroundColor: '#00d' },
        isEditMode: false
    }
    note.info = _setInfoByType(type, txt)
    console.log(note);
    gNotes.unshift(note);
    console.log(gNotes);
    _saveNotesToStorage();
}

function _setInfoByType(type, txt) {
    switch (type) {
        case 'text':
            return { txt }
        case 'list':
            var todosTxt = txt.split(',')
            console.log(todosTxt);
            return {
                lable: utilService.makeLorem(10),
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

function _createNote() {
    var note = {
        id: utilService.makeId(),
        type: _getRandomType(),
        isPinned: Math.random() > 0.8,
        style: { backgroundColor: '#00d' },
        isEditMode: false
    }
    note.info = _getInfoByType(note.type)
    gNotes.unshift(note)
    _saveNotesToStorage()
}

function _getInfoByType(type) {
    switch (type) {
        case 'text':
            return { txt: utilService.makeLorem(20) }
        case 'list':
            return {
                lable: utilService.makeLorem(10),
                todos: [
                    { txt: utilService.makeLorem(5), doneAt: (Math.random() > 0.7) ? Date.now() : null },
                    { txt: utilService.makeLorem(5), doneAt: (Math.random() > 0.7) ? Date.now() : null },
                    { txt: utilService.makeLorem(5), doneAt: (Math.random() > 0.7) ? Date.now() : null },
                    { txt: utilService.makeLorem(5), doneAt: (Math.random() > 0.7) ? Date.now() : null }
                ]
            }
        case 'img':
            return { title: 'New image', url: "assets/img/note-imgs/1.jpg" }
        case 'video':
            return { title: 'New video', url: "https://www.youtube.com/watch?v=w6vEE4NxlYw" }
        case 'sound':
            return { title: 'New sound', url: 'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg' }
    }
}

// UPDATE LATER
function _getRandomType() {
    var types = ['text', 'list', 'img', 'sound', 'video']
    return types[utilService.getRandomInt(0, types.length - 1)]
}



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
            return note.info.txt.includes(searchTxt)
        case 'sound' || 'video' || 'img':
            return note.info.title.includes(searchTxt)
        case 'list':
            return note.info.lable.includes(searchTxt)
    }
}

function _createNotes() {
    gNotes = _loadNotesFromStorage()
    if (!gNotes || gNotes.length === 0) {
        gNotes = []
        for (var i = 0; i < 10; i++) {
            _createNote()
        }
    }
}

function _saveNotesToStorage() {
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}





//  SORT 

// function sortMailes(mailes, sortBy) {
//     var sortedMailes;
//     if (sortBy === 'byDate') {
//         sortedMailes = _sortByDate(mailes)
//     }
//     else sortedMailes = _sortBySubject(mailes)
//     return sortedMailes;
// }

// function _sortByDate(mailes) {
//     var sortedMailes = mailes.sort(function (mailA, mailB) {
//         return mailA.sentAt - mailB.sentAt;
//     });
//     return sortedMailes;
// }

// function _sortBySubject(mailes) {
//     var sortedMailes = mailes.sort(function (a, b) {
//         var mailA = a.subject.toUpperCase();
//         var mailB = b.subject.toUpperCase();
//         if (mailA < mailB) {
//             return -1;
//         }
//         if (mailA > mailB) {
//             return 1;
//         }
//         return 0;
//     });
//     return sortedMailes;
// }


// FILTER 


// function filterMails(filterBy) {
//     switch (filterBy) {
//         case 'sent':
//             return _filterByState(filterBy)
//         case 'received':
//             return _filterByState(filterBy)
//         case 'starred':
//             return _filterByKey('isStarred')
//         case 'drafts':
//             return _filterByKey('isDraft')
//         case 'read':
//             return _filterByKey('isRead')
//     }
// }

// function _filterByState(filterBy) {
//     return gNotes.filter((mail) => {
//         return mail.state === filterBy
//     })
// }

// function _filterByKey(key) {
//     return gNotes.filter((mail) => {
//         return mail[key] === true
//     })
// }


// GET STATISTIC

// function getReadStatistics() {
//     var readMails = gNotes.filter((mail) => {
//         return mail.isRead === true
//     })
//     return Math.floor((readMails.length / gNotes.length) * 100)
// }