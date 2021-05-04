const { Link } = ReactRouterDOM
import { emailService } from '../../services/Email/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'

// export function EmailSideNav(props) {
export class EmailSideNav extends React.Component {

    state={
        readStatistics: null
    }

    removeReloadEvent;

    componentDidMount(){
        this.setState({readStatistics: this.onGetReadStatistics()})
        this.removeReloadEvent = eventBusService.on('update-statistics', ()=>{
            this.setState({readStatistics: this.onGetReadStatistics()})
        })
    }

    componentWillUnmount(){
        this.removeReloadEvent()
    }

    updateSelectedFilter = ({ target }) => {
        eventBusService.emit('mail-set-filter', target.value)
    }

    onGetReadStatistics=()=>{
        return emailService.getReadStatistics()
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
                <h2>{this.onGetReadStatistics()}% Read</h2>
            </div>
        )
    }
}


