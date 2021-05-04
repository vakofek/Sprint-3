import { emailService } from "../../services/Email/email.service.js"


export class Sort extends React.Component {

    state = {
        dateSort: 'up',
        subjectSort: 'up'
    }

    getDateSortIcons = () => {
        if (!this.state.dateSort) return
        if (this.state.dateSort === 'up') return <i className="fas fa-sort-numeric-up-alt"></i>
        return <i className="fas fa-sort-numeric-down"></i>
    }
    getSubjectSortIcons = () => {
        if (!this.state.subjectSort) return
        if (this.state.subjectSort === 'up') return <i className="fas fa-sort-alpha-up-alt"></i>
        return <i className="fas fa-sort-alpha-down"></i>
    }

    toggleDateSort = () => {
        if (this.state.dateSort === 'down') this.setState({ dateSort: 'up' }, () => {
            var mails = emailService.sortBy('date', this.state.dateSort)
            this.props.updateMails(mails)
        })
        else this.setState({ dateSort: 'down' }, () => {
            var mails = emailService.sortBy('date', this.state.dateSort)
            this.props.updateMails(mails)
        })
    }

    toggleSubjectSort = () => {
        if (this.state.subjectSort === 'down') this.setState({ subjectSort: 'up' }, emailService.sortBy('subject', this.state.subjectSort))
        else this.setState({ subjectSort: 'down' }, emailService.sortBy('subject', this.state.subjectSort))
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleDateSort}>{this.getDateSortIcons()}</button>
                <button onClick={this.toggleSubjectSort}>{this.getSubjectSortIcons()}</button>
            </div>
        )
    }
}