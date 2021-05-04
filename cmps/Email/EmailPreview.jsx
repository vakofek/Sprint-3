const { Link } = ReactRouterDOM

export class EmailPreview extends React.Component {

    getShortTxt = (txt , charNum) => {
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

   

    render() {
        const { mail } = this.props
        return (
            <Link to={`/mail/${mail.mailId}`}>
                <section className="mail-preview">
                    <h3 className="mail-preview-subject">{this.getShortTxt(mail.subject , 20)}</h3>
                    <h3 className="mail-preview-body">{this.getShortTxt(mail.body , 40)}</h3>
                    <h3>{this.getSentAtTime(mail.sentAt)}</h3>
                </section>
            </Link>
        )
    }
}