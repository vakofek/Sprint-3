
import { utilService } from '../util-service.js'
import { storageService } from '../storage-service.js'
import { bookData } from '../data/book.data.js'

export const bookService = {
    query,
    getBookById,
    getCurrency,
    getPriceColor,
    addReview,
    removeReview,
    searchBook,
    addBook
}

var gBooks = []
const STORAGE_KEY = 'books'
_createBooks()

function query(filterBy) {
    if (filterBy) {
        var { title, minPrice, maxPrice } = filterBy
        minPrice = (!minPrice) ? 0 : minPrice
        maxPrice = (!maxPrice) ? Infinity : maxPrice
        var books = gBooks.filter((book) => {
            return book.title.includes(title) && book.listPrice.amount > minPrice && book.listPrice.amount < maxPrice
        })
        return Promise.resolve(books)
    }
    return Promise.resolve(gBooks)
}


function getBookById(bookId) {
    var book = gBooks.find((book) => {
        return book.id === bookId
    })
    return Promise.resolve(book)
}

function getCurrency(currencyCode) {
    switch (currencyCode) {
        case 'EUR':
            return '€'
        case 'ILS':
            return '₪'
        case 'USD':
            return '$'
        default:
            break;
    }
}

function getPriceColor(price) {
    if (price > 150) return 'danger'
    if (price < 20) return 'success'
    return
}

function addReview(bookId, review) {
    var book = gBooks.find((book) => {
        return book.id === bookId
    })
    if (!book.reviews) book.reviews = []
    review.reviewId = utilService.makeId()
    book.reviews.push(review)
}

function removeReview(reviewId, bookId) {
    var book = gBooks.find((book) => {
        return book.id === bookId
    })
    var reviews = book.reviews
    var reviewIdx = reviews.findIndex((review) => {
        return review.reviewId === reviewId
    })
    book.reviews.splice(reviewIdx, 1)
}

function searchBook(bookTitle) {
    const prm = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookTitle}`)
        .then(res => res.data)
    return prm
}

function addBook(bookInfo) {
    var { authors, categories, description, pageCount, title, language, publishedDate } = bookInfo.volumeInfo
    if (!categories) categories = ["Computers", "Hack"]
    if (!authors) authors = ["Barbara Cartland", "puki Shakshuka"]
    if (!description) description = 'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse'
    var book = {
        "id": bookInfo.id,
        "title": title,
        "subtitle": bookInfo.searchInfo.textSnippet,
        "authors": authors,
        "publishedDate": publishedDate,
        "description": description,
        "pageCount": pageCount,
        "categories": categories,
        "thumbnail": bookInfo.volumeInfo.imageLinks.thumbnail,
        "language": language,
        "listPrice": {
            "amount": 109,
            "currencyCode": "EUR",
            "isOnSale": bookInfo.saleInfo.isEbook
        }
    }
    gBooks.unshift(book)
    _saveBooksToStorage(gBooks)
}

function _createBooks() {
    const books = _loadBooksFromStorage()
    if (books) gBooks = books
    else gBooks = bookData.getBooks();
    _saveBooksToStorage(gBooks)
}

function _saveBooksToStorage(books) {
    storageService.saveToStorage(STORAGE_KEY, books)
}

function _loadBooksFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}
