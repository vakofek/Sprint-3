const { Link } = ReactRouterDOM
import { bookService } from '../../services/Book/book.service.js'

export class BookPreview extends React.Component {

    getCurrency = (currencyCode) => {
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

    render() {
        const { book } = this.props
        return (
            <Link to={`/book/${book.id}`}>
                <section className="book-preview">
                    <h3>{book.title}</h3>
                    <img src={book.thumbnail} />
                    <h3 className={bookService.getPriceColor(book.listPrice.amount)}>{book.listPrice.amount} {bookService.getCurrency(book.listPrice.currencyCode)}</h3>
                </section>
            </Link>
        )
    }
}