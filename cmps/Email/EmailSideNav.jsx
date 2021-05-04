const { Link } = ReactRouterDOM
import { eventBusService } from '../../services/event-bus-service.js'

// export function EmailSideNav(props) {
export class EmailSideNav extends React.Component {

    removeReloadEvent;

    updateSelectedFilter = ({ target }) => {
        eventBusService.emit('mail-set-filter', target.value)
        eventBusService.emit('load-mails')
    }

    render() {

        return (
            <div>
                <h1>Email Side Nav</h1>
                <Link to="/mail/add-mail"><button>+</button></Link>
                <button value="received" onClick={this.updateSelectedFilter}>Inbox</button>
                <button value="starred" onClick={this.updateSelectedFilter}>Starred</button>
                <button value="sent" onClick={this.updateSelectedFilter}>Sent Mail</button>
                <button value="drafts" onClick={this.updateSelectedFilter}>Drafts</button>
            </div>
        )
    }
}


