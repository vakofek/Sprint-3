import { eventBusService } from '../../services/event-bus-service.js'
import { emailService } from '../../services/Email/email.service.js'
import { EmailPreview } from '../../cmps/Email/EmailPreview.jsx'

export class EmailList extends React.Component {

    state = {
        filterBy: 'received',
        mails: null
    }

    removeFilterEvent;

    componentDidMount() {
        this.removeFilterEvent = eventBusService.on('mail-set-filter', (filterBy) => {
            this.setState({ filterBy }, () => { this.loadMails() });
        })
        this.loadMails()
    }

    componentWillUnmount() {
        this.removeFilterEvent()
    }
    
    loadMails = () => {
        emailService.query(this.state.filterBy)
            .then((mails) => {
                this.setState({ mails })
            })
    }

    render() {
        const { mails, filterBy } = this.state
        if (!mails) return <div>Loading...</div>
        return (
            <section className="email-list">
                { mails.map((mail) => {
                    return <EmailPreview key={mail.mailId} mail={mail} />
                })}

            </section>
        )
    }
}