import { emailService } from '../../services/Email/email.service.js'
import { EmailPreview } from '../../cmps/Email/EmailPreview.jsx'

export class EmailList extends React.Component {

    state = {
        filterBy: null,
        mails: null
    }

    componentDidMount() {
        this.loadMails()

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
                { mails.map((mail)=>{
                   return <EmailPreview key={mail.mailId} mail={mail}/>
                })}

            </section>
        )
    }
}