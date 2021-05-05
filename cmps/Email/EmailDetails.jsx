
import { emailService } from '../../services/Email/email.service.js'
import { MailAction } from '../../cmps/Email/MailAction.jsx'

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

    render() {
        const { mail, action } = this.state
        if (!mail) return <div>Loading...</div>

        return (
            <section >
                <div className="mail-details">
                    <button onClick={this.goBack} ><i className="fas fa-times"></i></button>
                    <h3>{mail.subject}</h3>
                    {(mail.state === 'sent' || mail.state === 'drafts') && <div className="mail-from-info">
                        <h4>{mail.origin.to.name}</h4>
                        <h4>{mail.origin.to.mail}</h4>
                    </div>}
                    {(mail.state === 'received' || mail.state === 'starred') && <div className="mail-from-info">
                        <h4>{mail.origin.to.name}</h4>
                        <h4>{mail.origin.to.mail}</h4>
                    </div>}
                    <p className="mail-details-body">{mail.body}</p>
                    <div className="mail-details-btn-container">
                        <button onClick={() => {
                            this.setState({ action: 'reply' })
                        }}><i className="fas fa-reply"></i></button>
                        <button onClick={() => {
                            this.setState({ action: 'forward' })
                        }}><i className="far fa-share-square"></i></button>
                    </div>
                </div>
                {action && <MailAction mail={mail} action={action} goBack={this.goBack} closeAction={() => { this.setState({ action: '' }) }} />}
            </section >
        )
    }
}