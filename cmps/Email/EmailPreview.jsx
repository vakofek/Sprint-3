const { Link } = ReactRouterDOM
import { eventBusService } from '../../services/event-bus-service.js'
import { emailService } from '../../services/Email/email.service.js'

export class EmailPreview extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    getShortTxt = (txt, charNum) => {
        return txt.substring(0, charNum) + ' ...'
    }

    getSentAtTime = (time) => {
        var timeStr = new Date(time)

        var dd = timeStr.getDate()
        var mm = timeStr.getMonth() + 1
        var yyyy = timeStr.getFullYear()
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
    }

    getStarClass = () => {
        if (this.props.mail.isStarred) return ' star-on'
        return ''
    }

    getReadClass = () => {
        if (this.props.mail.isRead) return ' read-on'
        return ''
    }

    onToggleStar = () => {
        emailService.toggleStar(this.state.mail.mailId)
            .then((mail) => {
                this.setState({ mail }, this.props.loadMails())
            })
    }

    onRemoveMail = () => {
        emailService.removeMail(this.state.mail.mailId)
            .then(() => { this.props.loadMails() })
    }

    onToggleRead = () => {
        emailService.toggleRead(this.state.mail.mailId)
            .then((mail) => {
                this.setState({ mail } , eventBusService.emit('update-statistics'))
            })
    }

    getReadIcon = () => {
        if (!this.state.mail) return
        return (this.state.mail.isRead) ? <i className="fas fa-envelope-open"></i> : <i className="fas fa-envelope"></i>
    }


    render() {
        const { mail } = this.props
        if (!mail) return <div>Lading...</div>
        return (
            <section className={'mail-preview' + this.getReadClass()}>
                <Link onClick={this.onToggleRead} to={`/mail/${mail.mailId}`}>
                    <h3 className="mail-preview-subject">{this.getShortTxt(mail.subject, 20)}</h3>
                    <h3 className="mail-preview-body">{this.getShortTxt(mail.body, 40)}</h3>
                    <h3>{this.getSentAtTime(mail.sentAt)}</h3>
                </Link>
                <button className={'star-btn' + this.getStarClass()} onClick={this.onToggleStar} >★</button>
                <button onClick={this.onRemoveMail} > X </button>
                <button onClick={this.onToggleRead} >{this.getReadIcon()}</button>
            </section>
        )
    }
}