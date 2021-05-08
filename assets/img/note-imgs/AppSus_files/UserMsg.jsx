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
    const msgClass = this.state.msg.msgType
    return (
      <section className={'user-msg ' + msgClass}>
        <img src="assets/img/success.png" />
        {this.state.msg.txt}
        <div className="user-msg-btn-container">
          {this.state.msg.app === 'book' && <button className="secondary-btn" onClick={() => {
            this.setState({ msg: null })
          }}>Close</button>}
          <button className=" success-btn" onClick={() => {
            this.setState({ msg: null })
          }}>
            {this.state.msg.app === 'book' &&<Link to={`/book/${this.state.msg.bookId}`} >Check it Out</Link>}
            {this.state.msg.app === 'mail' &&<Link to={`/mail`} >Back to inbox</Link>}
          </button>
        </div>
      </section>
    )
  }
}
