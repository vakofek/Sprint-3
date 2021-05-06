// import { bookService } from '../../services/Book/book.service.js'
import { bookService } from '../../services/Book/book.service.js'

import { eventBusService } from '../../services/event-bus-service.js'
import { UserMsg } from '../../cmps/Book/UserMsg.jsx'

export class AddBook extends React.Component {

    state = {
        searchStr: '',
        books: []
    }

    handleChange = (ev) => {
        this.setState({ searchStr: ev.target.value }, () => {
            bookService.searchBook(this.state.searchStr)
                .then(books => this.setState({ books: books.items }))
        })
    }

    onAddBook = (book) => {
        bookService.addBook(book)
    }

    render() {
        const { books, searchStr } = this.state
        return (
            <main className="add-book">
                <form>
                    <input type="text" placeholder="Find your favorite books" onChange={this.handleChange} value={searchStr} />
                </form>
                <section className="search-result">
                    {books && books.map((book) => {
                        return (
                            <div key={book.id} className="search-preview">
                                <button onClick={() => {
                                    this.onAddBook(book)
                                    eventBusService.emit('show-user-msg', { txt: 'Book was successfully saved!', type: 'success', bookId: book.id })
                                }}><i className="far fa-plus-square"></i></button>
                                <h3>{book.volumeInfo.title}</h3>
                            </div>
                        )
                    })}
                </section>
                <UserMsg />
            </main>
        )
    }
}