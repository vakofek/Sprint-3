const { NavLink } = ReactRouterDOM
import { emailService } from '../../services/Email/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'
import { ProgressBar } from '../../cmps/Email/ProgresBar.jsx'

export class EmailSideNav extends React.Component {

    state = {
        readStatistics: null,
        active: 'received'
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
        this.setState({ active: value })
    }

    onGetReadStatistics = () => {
        return emailService.getReadStatistics()
    }

    getActiveClass = (filter) => {
        return (filter === this.state.active) ? 'active' : ''
    }


    render() {

        return (
            <section className="email-side-nav">
                <div className="email-side-nav-btn-conttainer">
                    <NavLink className="add-mail-btn" to="/mail/add-mail"><i className="fas fa-plus"></i><span>Compose Mail</span></NavLink>
                    <NavLink className={this.getActiveClass('received')} onClick={() => { this.updateSelectedFilter('received') }}><i className="fas fa-inbox"></i><h3>Inbox</h3></NavLink>
                    <NavLink className={this.getActiveClass('starred')} onClick={() => { this.updateSelectedFilter('starred') }}><i className="far fa-star"></i><h3>Starred</h3></NavLink>
                    <NavLink className={this.getActiveClass('sent')} onClick={() => { this.updateSelectedFilter('sent') }}><i className="fas fa-sign-out-alt"></i><h3>Sent Mail</h3></NavLink>
                    <NavLink className={this.getActiveClass('drafts')} onClick={() => { this.updateSelectedFilter('drafts') }}><i className="fas fa-feather-alt"></i><h3>Drafts</h3></NavLink>
                    <NavLink className={this.getActiveClass('read')} onClick={() => { this.updateSelectedFilter('read') }}><i className="fas fa-envelope-open"></i><h3>Read</h3></NavLink>
                </div>
                <ProgressBar onGetReadStatistics={this.onGetReadStatistics()} />
            </section>
        )
    }
}

