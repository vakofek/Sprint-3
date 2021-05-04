
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

    goBack = () => {
        this.props.history.push('/mail')
    }
    // getShortDescription = (description) => {
    //     return description.substring(0, 100) + '...'
    // }

    // onRemoveReview = (reviewId) => {
    //     bookService.removeReview(reviewId, this.state.book.id)
    //     this.loadMail()
    // }

    render() {
        const { mail, action } = this.state
        if (!mail) return <div>Loading...</div>

        return (
            <main className="mail-details">
                <h3>{mail.subject}</h3>
                {(mail.state === 'sent' || mail.state === 'drafts') && <div className="mail-from-info">
                    <h4>{mail.origin.to.name}</h4>
                    <h4>{mail.origin.to.mail}</h4>
                </div>}
                {(mail.state === 'received' ||mail.state === 'starred') && <div className="mail-from-info">
                    <h4>{mail.origin.to.name}</h4>
                    <h4>{mail.origin.to.mail}</h4>
                </div>}
                <p>{mail.body}</p>
                <button onClick={() => {
                    this.setState({ action: 'reply' })
                }}>Reply</button>
                <button onClick={() => {
                    this.setState({ action: 'forward' })
                }}>Forward</button>
                {action && <MailAction mail={mail} action={action} goBack={this.goBack} closeAction={() => { this.setState({ action: '' }) }} />}
                <button onClick={this.goBack} >X</button>
            </main >
        )
    }
}