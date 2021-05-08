import { bookService } from '../../services/Book/book.service.js'
import { ReviewAdd } from '../../cmps/Book/ReviewAdd.jsx'
import { UsersReviews } from '../../cmps/Book/usersReviews.jsx'

export class BookDetails extends React.Component {

    state = {
        isLongTxtShown: false,
        book: null
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook = () => {
        const bookId = this.props.match.params.bookId
        bookService.getBookById(bookId)
            .then((book) => {
                if (!book) return this.props.history.push('/')
                this.setState({ book })
            })
    }

    getPageCountTxt = (pageCount) => {
        if (pageCount < 200 && pageCount > 100) return
        if (pageCount > 500) return 'Long reading'
        if (pageCount > 200) return 'Decent Reading'
        if (pageCount < 100) return 'Light Reading'
    }

    getPublishedDateTxt = (publishedDate) => {
        const currYear = new Date().getFullYear()
        if (currYear - publishedDate > 10) return 'Veteran Book'
        if (currYear - publishedDate < 1) return 'New!'
        return
    }

    getShortDescription = (description) => {
        return description.substring(0, 100) + '...'
    }

    onRemoveReview = (reviewId) => {
        bookService.removeReview(reviewId, this.state.book.id)
        this.loadBook()
    }

    render() {
        const { book } = this.state
        if (!book) return <div>Loading...</div>

        return (
            <main className="book-details">
                <button className="book-details-back-btn" onClick={() => {
                    this.props.history.push('/book')
                }}><i className="far fa-window-close"></i></button>
                <div className="book-details-top">
                    <img src={book.thumbnail} />
                    <div className="book-details-info">
                        <div className="book-categories">
                            <span >[{book.categories.join(' , ')}]</span>
                            <div>
                                {book.listPrice.isOnSale && <h2 className="sign sale-sign">ON SALE!</h2>}
                                {this.getPageCountTxt(book.pageCount) && <h2 className="sign page-count-sign">{this.getPageCountTxt(book.pageCount)}</h2>}
                                {this.getPublishedDateTxt(book.publishedDate) && <h2 className="sign publish-date-sign">{this.getPublishedDateTxt(book.publishedDate)}</h2>}
                            </div>
                        </div>
                        <h1>{book.title}</h1>
                        <h3>By <span>{book.authors.join(' , ')}</span></h3>
                        <h3 className="subtitle">{book.subtitle}</h3>
                        <h3 className="price">Price:  <span className={bookService.getPriceColor(book.listPrice.amount)}>
                            {book.listPrice.amount} {bookService.getCurrency(book.listPrice.currencyCode)}
                        </span></h3>
                        <section className="book-description">
                            <h3>Description: </h3>
                            <span className="description">{!this.state.isLongTxtShown ? this.getShortDescription(book.description) : book.description}</span>
                        </section>
                        <button className="secondary-btn" onClick={() => {
                            this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
                        }}>{!this.state.isLongTxtShown ? 'Read More' : 'Read Less'}</button>
                    </div >
                </div>
                <section className="review-area">
                    <ReviewAdd loadBook={this.loadBook} book={book} />
                    <UsersReviews book={book} onRemoveReview={this.onRemoveReview} />
                </section>
            </main >)
    }
}