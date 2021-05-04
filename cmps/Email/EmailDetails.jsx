import { emailService } from '../../services/Email/email.service.js'
import { MailAction } from '../../cmps/Email/MailAction.jsx'
// import { ReviewAdd } from '../../cmps/Book/ReBookviewAdd.jsx'
// import { UsersReviews } from '../../cmps/Book/usersReviews.jsx'

export class EmailDetails extends React.Component {

    state = {
        isLongTxtShown: false,
        mail: null,
        action: ''
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const mailId = this.props.match.params.mailId
        emailService.getMailById(mailId)
            .then((mail) => {
                if (!mail) return this.props.history.push('/mail')
                this.setState({ mail })
            })
    }

    // getShortDescription = (description) => {
    //     return description.substring(0, 100) + '...'
    // }

    // onRemoveReview = (reviewId) => {
    //     bookService.removeReview(reviewId, this.state.book.id)
    //     this.loadMail()
    // }

    render() {
        const { mail , action} = this.state
        if (!mail) return <div>Loading...</div>

        return (
            <main className="mail-details">
                <h3>{mail.subject}</h3>
                <div className="mail-from-info">
                    <h4>{mail.from.name}</h4>
                    <h4>{mail.from.mail}</h4>
                </div>
                <p>{mail.body}</p>
                <button onClick={() => {
                    this.setState({ action: 'reply' })
                }}>Reply</button>
                <button onClick={() => {
                    this.setState({ action: 'forward' })
                }}>Forward</button>
                {action && <MailAction mail={mail} action={action}/>}
              
            </main >
        )
    }
}