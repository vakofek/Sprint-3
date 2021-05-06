const { Link, NavLink } = ReactRouterDOM
import { emailService } from '../../services/Email/email.service.js'
import { eventBusService } from '../../services/event-bus-service.js'
import {ProgressBar} from '../../cmps/Email/ProgresBar.jsx'

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
                {/* <ProgressBar onGetReadStatistics={this.onGetReadStatistics} /> */}

                <h2>{this.onGetReadStatistics()}% Read</h2>
            </section>
        )
    }
}


// .myProgress {
//     width: 90%;
//     margin: 0 auto;
//     background-color: #e9ecef;
//     height: 20px;
//     font: 1rem;
//     position: relative
// }

// .myProgress p {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }

// .myBar {
//     width: 1%;
//     height: 20px;
//     text-align: center;
//     background-size: 20px 20px;
//     background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)
// }