import { eventBusService } from '../../services/event-bus-service.js'
import { emailService } from "../../services/Email/email.service.js"


export class MailAction extends React.Component {

    state = {
        mail: {
            to: '',
            copy: '',
            subject: '',
            body: ''
        }
    }


    componentDidMount() {
        const { mail, action } = this.props
        this.setState({ mail: { ...this.state.mail, to: mail.origin.from, subject: mail.subject } })
        if (action === 'forward') {
            this.setState({ mail: { ...this.state.mail, body: mail.body } })
        }

    }

    handleChange = (ev) => {
        ev.preventDefault()
        const inputName = ev.target.name
        const inputValue = ev.target.value
        this.setState({ mail: { ...this.state.mail, [inputName]: inputValue } })
    }

    sendMail = (ev) => {
        ev.preventDefault()
        emailService.addMail(this.state.mail)
        eventBusService.emit('mail-set-filter', 'sent')
        this.props.goBack()
    }

    render() {
        const { to, copy, subject, body } = this.state.mail
        return (

            <form className="mail-action">
                <label htmlFor="">To</label>
                <input name="to" type="text" value={to.mail} onChange={this.handleChange} />

                <label htmlFor="">Copy</label>
                <input name="copy" type="text" value={copy} onChange={this.handleChange} />

                <label htmlFor="">Subject</label>
                <input name="subject" type="text" value={subject} onChange={this.handleChange} />

                <textarea name="body" value={body} onChange={this.handleChange} />
                <div className="mail-action-btn-container">
                    <button className="mail-action-btn-send" onClick={this.sendMail} ><i className="far fa-paper-plane"></i></button>
                    <button className="mail-action-btn-remove" onClick={this.props.closeAction}><i className="far fa-trash-alt"></i></button>
                </div>
            </form>

        )
    }


}