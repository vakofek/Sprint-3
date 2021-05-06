const { Link, NavLink } = ReactRouterDOM
import { emailService } from '../../services/Email/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'

// export function EmailSideNav(props) {
export class EmailSideNav extends React.Component {

    state = {
        readStatistics: null
    }

    removeReloadEvent;

    componentDidMount() {
        this.setState({ readStatistics: this.onGetReadStatistics() })
        this.removeReloadEvent = eventBusService.on('update-statistics', () => {
            this.setState({ readStatistics: this.onGetReadStatistics() })
        })
    }

    componentWillUnmount() {
        this.removeReloadEvent()
    }

    updateSelectedFilter = (value) => {
        eventBusService.emit('mail-set-filter', value)
    }

    onGetReadStatistics = () => {
        return emailService.getReadStatistics()
    }


    render() {

        return (
            <section className="email-side-nav">
                <Link className="add-mail-btn" to="/mail/add-mail"><i className="fas fa-plus"></i><span>Compose Mail</span></Link>
                <NavLink onClick={() => { this.updateSelectedFilter('received') }}>Inbox</NavLink>
                <NavLink onClick={() => { this.updateSelectedFilter('starred') }}>Starred</NavLink>
                <NavLink onClick={() => { this.updateSelectedFilter('sent') }}>Sent Mail</NavLink>
                <NavLink onClick={() => { this.updateSelectedFilter('drafts') }}>Drafts</NavLink>
                <NavLink onClick={() => { this.updateSelectedFilter('read') }}>Read</NavLink>
                <h2>{this.onGetReadStatistics()}% Read</h2>
            </section>
        )
    }
}


