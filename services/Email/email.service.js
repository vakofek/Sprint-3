
import { utilService } from '../util-service.js'
import { storageService } from '../storage-service.js'
import { func } from 'prop-types'

export const emailService = {
    query,
    getMailById,
    addReview,
    removeReview,
    addMail
}

var gMails = []
const STORAGE_KEY = 'mails'
_createMails()

function query(filterBy) {
    if (filterBy) {
        var mails = gMails.filter((mail) => {
            return mail.state === filterBy
        })
        return Promise.resolve(mails)
    }
    return Promise.resolve(gMails)
}


function getMailById(mailId) {
    var currMail = gMails.find((mail) => {
        return mail.mailId === mailId
    })
    return Promise.resolve(currMail)
}


function addReview(bookId, review) {
    var book = gMails.find((book) => {
        return book.id === bookId
    })
    if (!book.reviews) book.reviews = []
    review.reviewId = utilService.makeId()
    book.reviews.push(review)
}

function removeReview(reviewId, bookId) {
    var book = gMails.find((book) => {
        return book.id === bookId
    })
    var reviews = book.reviews
    var reviewIdx = reviews.findIndex((review) => {
        return review.reviewId === reviewId
    })
    book.reviews.splice(reviewIdx, 1)
}

function addMail(info) {
    const { subject, to, body } = info
    var mail = {
        origin: {
            to: { mail: to, name: utilService.makeLorem(2) },
            from: { mail: 'user@gmail.com', name: 'user' }
        },
        mailId: utilService.makeId(),
        subject: subject,
        body: body,
        isRead: true,
        sentAt: Date.now(),
        state: 'sent'
    }
    gMails.unshift(mail);
    _saveMailsToStorage();
}

function _createMail() {
    var states = ['sent', 'received', 'starred', 'drafts']
    var mail = {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomIntInclusive(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: Date.now(),
        state: states[utilService.getRandomIntInclusive(0, 3)],
    }
    mail.origin = _getOrigin(mail.state);
    gMails.unshift(mail)
    _saveMailsToStorage()
}

function _getOrigin(state) {
    switch (state) {
        case 'sent':
            return {
                to: { mail: `${utilService.makeLorem(1)}@gamil.com`, name: utilService.makeLorem(2) },
                from: { mail: 'user@gmail.com', name: 'user' }
            }
        case 'received':
            return {
                to: { mail: 'user@gmail.com', name: 'user' },
                from: { mail: `${utilService.makeLorem(1)}@gamil.com`, name: utilService.makeLorem(2) }
            }
        case 'starred':
            return {
                to: { mail: 'user@gmail.com', name: 'user' },
                from: { mail: `${utilService.makeLorem(1)}@gamil.com`, name: utilService.makeLorem(2) }
            }
        case 'drafts':
            return {
                to: { mail: `${utilService.makeLorem(1)}@gamil.com`, name: utilService.makeLorem(2) },
                from: { mail: 'user@gmail.com', name: 'user' }
            }
    }
}


function _createMails() {
    gMails = _loadMailsFromStorage()
    if (!gMails || gMails.length === 0) {
        gMails = []
        for (var i = 0; i < 50; i++) {
            _createMail()
        }
    }
}

function _saveMailsToStorage() {
    storageService.saveToStorage(STORAGE_KEY, gMails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
