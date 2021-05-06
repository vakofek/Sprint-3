const { Link } = ReactRouterDOM
import { eventBusService } from '../../services/event-bus-service.js'


export class UserMsg extends React.Component {

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg ' + msgClass}>
        <img src="assets/img/success.png"/>
        {this.state.msg.txt}
        <div className="user-msg-btn-container">
          <button className="secondary-btn" onClick={() => {
            this.setState({ msg: null })
          }}>Close</button>
          <button className=" success-btn" onClick={() => {
              this.setState({ msg: null })
            }}>
            <Link to={`/book/${this.state.msg.bookId}`} >Check it Out</Link>
          </button>
        </div>
      </section>
    )
  }
}
