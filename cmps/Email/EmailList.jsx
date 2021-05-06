import { eventBusService } from '../../services/event-bus-service.js'
import { emailService } from '../../services/Email/email.service.js'
import { EmailPreview } from '../../cmps/Email/EmailPreview.jsx'
import { SearchMail } from '../../cmps/Email/SearchMail.jsx'
import { Sort } from '../../cmps/Email/Sort.jsx'


export class EmailList extends React.Component {

    state = {
        filterBy: 'received',
        sortBy: null,
        mails: null
    }

    removeFilterEvent;
    removeSortEvent;


    componentDidMount() {
        this.removeFilterEvent = eventBusService.on('mail-set-filter', (filterBy) => {
            this.setState({ filterBy }, () => { this.loadMails() });
        })
        this.removeSortEvent = eventBusService.on('mail-set-sort', (sortBy) => {
            this.setState({ sortBy }, () => { this.loadMails() });
        })

        this.loadMails()
    }

    componentWillUnmount() {
        this.removeFilterEvent()
        this.removeSortEvent()
    }
    onSortBy = (sortBy) => {
        this.setState({ sortBy }, () => this.loadMails())
    }

    loadMails = () => {
        emailService.query(this.state.filterBy, this.state.sortBy)
            .then((mails) => {
                this.setState({ mails })
            })
    }

    OnSearchMail = (searchTxt) => {
        emailService.searchMail(searchTxt.toUpperCase())
            .then((mails) => {
                this.setState({ mails })
            })
    }

    render() {
        const { mails, filterBy } = this.state
        if (!mails) return <div>Loading...</div>
        return (
            <section className="email-list">
                <div className="filter-search-container">
                    <SearchMail OnSearchMail={this.OnSearchMail} loadMails={this.loadMails} />
                    <Sort onSortBy={this.onSortBy} />
                </div>
                { mails.map((mail) => {
                    return <EmailPreview key={mail.mailId} mail={mail} loadMails={this.loadMails} />
                })}

            </section>
        )
    }
}