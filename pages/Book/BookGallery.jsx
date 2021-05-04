const { NavLink } = ReactRouterDOM
import { bookService } from '../services/book.service.js'
import { BookList } from '../Book/BookList.jsx'
import { BookFilter } from '../../cmps/Book/BookFilter.jsx'

export class BookGallery extends React.Component {

    state = {
        books: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({ books })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    render() {
        const { books, filterBy } = this.state
        if (!books) return <div>Loading...</div>
        return (
            <main className="book-app">
                <BookFilter onSetFilter={this.onSetFilter} />
                <NavLink to="/add-book">Add Book</NavLink>
                <BookList books={books} />
            </main>
        )
    }
}