
import { utilService } from '../util-service.js'
import { storageService } from '../storage-service.js'
import { mailData } from '../data/mail.data.js'

export const emailService = {
    query,
    getMailById,
    addReview,
    removeReview,
    addMail,
    toggleStar,
    removeMail,
    toggleRead,
    getReadStatistics,
    searchMail,
}

var gMails = []
const STORAGE_KEY = 'mails'
_createMails()

function query(filterBy, sort) {
    if (filterBy) {
        if (!sort) return Promise.resolve(filterMails(filterBy))
        else {
            var filteredMails = filterMails(filterBy)
            var sortedMailes = sortMailes(filteredMails, sort)
            return Promise.resolve(sortedMailes)
        }
    }
    return Promise.resolve(gMails)
}

function sortMailes(mailes, sort) {
    var sortedMailes;
    switch (sort.sortBy) {
        case 'byDate':
            sortedMailes = _sortByDate(mailes, sort.sortTypeByIcon)
            break;
        case 'bySubject':
            sortedMailes = _sortBySubject(mailes, sort.sortTypeByIcon)
            break;
        case 'byRead':
            sortedMailes = _sortByRead(mailes, sort.sortTypeByIcon)
            break;
    }
    return sortedMailes;
}

function _sortByDate(mailes, sortTypeByIcon) {
    if (sortTypeByIcon) return mailes.sort(function (mailA, mailB) {
        return new Date(mailA.sentAt).getTime() - new Date(mailB.sentAt).getTime()
    });
    return mailes.sort(function (mailA, mailB) {
        return new Date(mailB.sentAt).getTime() - new Date(mailA.sentAt).getTime()
    });
}

function _sortBySubject(mailes, sortTypeByIcon) {
    if (sortTypeByIcon) {
        return mailes.sort(function (a, b) {
            var mailA = a.subject.toUpperCase();
            var mailB = b.subject.toUpperCase();
            if (mailA < mailB) {
                return -1;
            }
            if (mailA > mailB) {
                return 1;
            }
            return 0;
        });
    }
    else {
        return mailes.sort(function (a, b) {
            var mailA = a.subject.toUpperCase();
            var mailB = b.subject.toUpperCase();
            if (mailA > mailB) {
                return -1;
            }
            if (mailA < mailB) {
                return 1;
            }
            return 0;
        });
    }
}

function _sortByRead(mailes, sortTypeByIcon) {
    if (sortTypeByIcon)
        return mailes.sort((mailA, mailB) => {
            return (!mailA.isRead === !mailB.isRead) ? 0 : !mailA.isRead ? -1 : 1
        })
    else return mailes.sort((mailA, mailB) => {
        return (mailA.isRead === mailB.isRead) ? 0 : mailA.isRead ? -1 : 1
    })

}

function filterMails(filterBy) {
    switch (filterBy) {
        case 'sent':
            return _filterByState(filterBy)
        case 'received':
            return _filterByState(filterBy)
        case 'starred':
            return _filterByKey('isStarred')
        case 'drafts':
            return _filterByKey('isDraft')
        case 'read':
            return _filterByKey('isRead')
    }
}

function toggleStar(mailId) {
    return Promise.resolve(
        getMailById(mailId)
            .then((mail) => {
                mail.isStarred = !mail.isStarred
                return mail
            })
    )
}

function toggleRead(mailId) {
    return Promise.resolve(
        getMailById(mailId)
            .then((mail) => {
                mail.isRead = !mail.isRead
                return mail
            })
    )
}

function getReadStatistics() {
    var readMails = gMails.filter((mail) => {
        return mail.isRead === true
    })
    return Math.floor((readMails.length / gMails.length) * 100)
}


function removeMail(mailId) {
    var mailIdx = getMailIdxById(mailId)
    gMails.splice(mailIdx, 1)
    _saveMailsToStorage()
    return Promise.resolve()
}

function _filterByState(filterBy) {
    return gMails.filter((mail) => {
        return mail.state === filterBy
    })
}

function _filterByKey(key) {
    return gMails.filter((mail) => {
        return mail[key] === true
    })
}

function getMailById(mailId) {
    var currMail = gMails.find((mail) => {
        return mail.mailId === mailId
    })
    return Promise.resolve(currMail)
}

function getMailIdxById(mailId) {
    return gMails.findIndex((mail) => {
        return mail.mailId === mailId
    })
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
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        },
        mailId: utilService.makeId(),
        subject: subject,
        body: body,
        isRead: true,
        sentAt: Date.now(),
        state: 'sent',
        isStarred: false,
        isDraft: false
    }
    gMails.unshift(mail);
    _saveMailsToStorage();
}


function searchMail(searchTxt) {
    var mails = gMails.filter((mail) => {
        return mail.subject.includes(searchTxt) || mail.body.includes(searchTxt)
            || mail.origin.to.name.includes(searchTxt) || mail.origin.from.name.includes(searchTxt)
            || mail.origin.to.mail.includes(searchTxt) || mail.origin.from.mail.includes(searchTxt)
    })
    if (!mails) return Promise.resolve(gMails)
    return Promise.resolve(mails)
}


function _createMails() {
    gMails = _loadMailsFromStorage()
    if (!gMails || gMails.length === 0) {
        gMails = []
        var mails = mailData.getMails()
        for (var i = 0; i < mails.length; i++) {
            gMails.unshift(mails[i])
        }
        gMails = utilService.arrayShuffle(gMails);
    }
    _saveMailsToStorage()
}

function _saveMailsToStorage() {
    storageService.saveToStorage(STORAGE_KEY, gMails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
