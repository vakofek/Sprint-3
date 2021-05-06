import { RateStars } from '../../cmps/Book/RateStars.jsx'
import { bookService } from '../../services/Book/book.service.js'

export class ReviewAdd extends React.Component {

    state = {
        review: {
            userName: 'Books Reader',
            rate: null,
            readAt: null,
            userReview: ''
        }
    }

    componentDidMount() {
        this.setState({ review: { ...this.state.review, readAt: this.getCurrDate() } })
    }

    getCurrDate = () => {
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const inputName = ev.target.name
        const inputValue = (ev.target.type === 'radio') ? +ev.target.value : ev.target.value
        this.setState({ review: { ...this.state.review, [inputName]: inputValue } })
    }

    saveReview = (ev) => {
        ev.preventDefault()
        bookService.addReview(this.props.book.id, this.state.review)
        this.clearReview()

    }

    clearReview = () => {
        this.setState({ review: { ...this.state.review, userName: 'Books Reader', rate: null, readAt: this.getCurrDate(), userReview: '' } }, this.props.loadBook)
    }


    render() {
        if (!this.state.review.readAt) return <div>loading...</div>
        return (
            <form className="review-form" onSubmit={this.saveReview}>
                <div className="user-info">
                    <label htmlFor="read-at">Read At: </label>
                    <input type="date" id="read-at" name="readAt" value={this.state.review.readAt} onChange={this.handleChange} />
                    <label htmlFor="user-name">Your Name: </label>
                    <input type="text" id="user-name" name="userName" value={this.state.review.userName} onChange={this.handleChange} />
                </div>
                <RateStars handleChange={this.handleChange} />
                <textarea name="userReview" id="user-review" cols="30" rows="10" placeholder="Your thoughts about this book" onChange={this.handleChange} value={this.state.review.userReview}></textarea>
                <button className="success-btn">Save</button>
            </form>
        )
    }
}