
import { utilService } from '../util-service.js'
import { storageService } from '../storage-service.js'

export const emailService = {
    query,
    getMailById,
    addReview,
    removeReview,
}

var gMails = []
const STORAGE_KEY = 'mails'
_createMails()

function query(filterBy) {
    if (filterBy) {
        var { title, minPrice, maxPrice } = filterBy
        minPrice = (!minPrice) ? 0 : minPrice
        maxPrice = (!maxPrice) ? Infinity : maxPrice
        var books = gMails.filter((book) => {
            return book.title.includes(title) && book.listPrice.amount > minPrice && book.listPrice.amount < maxPrice
        })
        return Promise.resolve(books)
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

// function searchBook(bookTitle) {
//     const prm = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookTitle}`)
//         .then(res => res.data)
//     return prm
// }

function _createMail() {
    var mail = {
        from: { mail: `${utilService.makeLorem(1)}@gamil.com`, name: utilService.makeLorem(2) },
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomIntInclusive(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: Date.now()
    }
    console.log(mail);
    gMails.unshift(mail)
    _saveMailsToStorage()
}

function _createMails() {
    gMails = _loadMailsFromStorage()
    if (!gMails || gMails.length === 0) {
        gMails = []
        for (var i = 0; i < 20; i++) {
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
