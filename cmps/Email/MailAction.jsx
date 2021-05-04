

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
        this.setState({ mail: { ...this.state.mail, to: mail.from.mail, subject: mail.subject } })
        if (action === 'forward') {this.setState({ mail: { ...this.state.mail, body: mail.body } })
    }

}

handleChange = (ev) => {
    ev.preventDefault()
    const inputName = ev.target.name
    const inputValue = ev.target.value
    this.setState({ mail: { ...this.state.mail, [inputName]: inputValue } })
}

render() {
    const { to, copy, subject, body } = this.state.mail
    return (

        <form>
            <label htmlFor="">To</label>
            <input name="to" type="text" value={to} onChange={this.handleChange}/>

            <label htmlFor="">Copy</label>
            <input name="copy" type="text" value={copy} onChange={this.handleChange}/>

            <label htmlFor="">Subject</label>
            <input name="subject" type="text" value={subject} onChange={this.handleChange}/>

            <textarea name="body" value={body} onChange={this.handleChange}/>

            <button>Send</button>
            <button>Delete</button>
        </form>

    )
}


}