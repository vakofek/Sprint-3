export class UsersReviews extends React.Component {

    state = {
        bookReviews: null
    }

    componentDidMount() {
        this.setState({ bookReviews: this.props.book.reviews })
    }

    render() {
        if (!this.props.book.reviews || this.props.book.reviews.length === 0) return <h2 className="users-reviews">Be the first to review this book!</h2>
       
        return (
            <div className="users-reviews">
                {this.props.book.reviews && this.props.book.reviews.map((review) => {
                    const { reviewId, userName, rate, readAt, userReview } = review
                    return (
                        <div className="user-review" key={userName + rate + readAt}>
                            <div className="user-review-content">
                                <h3> From: {userName}</h3>
                                <h3> Rate: {rate}</h3>
                                <h3> Read At: {readAt}</h3>
                                <h3> Review: </h3>
                                <p>{userReview}</p>
                            </div>
                            <button className="danger-btn" onClick={() => { this.props.onRemoveReview(reviewId) }}><i className="far fa-trash-alt"></i></button>
                        </div>
                    )
                })
                }
            </div >)
    }
}