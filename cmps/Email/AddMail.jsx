import { emailService } from "../../services/Email/email.service.js"

export class AddMail extends React.Component {
    state = {
        mail: {
            to: '',
            copy: '',
            subject: '',
            body: ''
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
        this.goBack()
    }

    goBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { to, copy, subject, body } = this.state.mail
        return (
            <form className="add-mail">
                <label htmlFor="">To</label>
                <input name="to" type="text" value={to.mail} onChange={this.handleChange} />

                <label htmlFor="">Copy</label>
                <input name="copy" type="text" value={copy} onChange={this.handleChange} />

                <label htmlFor="">Subject</label>
                <input name="subject" type="text" value={subject} onChange={this.handleChange} />

                <textarea name="body" value={body} onChange={this.handleChange} />
                <div className="add-mail-btn-container">
                    <button className="add-mail-btn-send" onClick={this.sendMail} ><i className="far fa-paper-plane"></i></button>
                    <button className="add-mail-btn-remove" onClick={this.goBack}><i className="far fa-trash-alt"></i></button>
                </div>
            </form>
        )
    }
}