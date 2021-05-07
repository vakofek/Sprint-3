import { eventBusService } from '../../services/event-bus-service.js'
export class ProgressBar extends React.Component {

    state = {
        progressBarData: {
            percent: null,
            style: {
                width: null,
                backgroundColor: null,
                minWidth: '1%'
            }
        }
    }


    componentDidMount() {
        this.updateProgressBar(this.props.onGetReadStatistics)
    }

    updateProgressBar = (percent) => {
        this.setState({ progressBarData: { ...this.state.progressBarData, percent: percent, style: { ...this.state.progressBarData.style, width: this.props.onGetReadStatistics, backgroundColor: this.deterColor() } } })
    }

  componentDidUpdate(prevProps , prevState){
      if (prevProps.onGetReadStatistics !== this.props.onGetReadStatistics)
      this.updateProgressBar(this.props.onGetReadStatistics)
  }

    deterColor = () => {
        if (+this.state.progressBarData.percent < 25) return `#d9534f`;
        if (+this.state.progressBarData.percent < 50) return `#f0ad4e`;
        if (+this.state.progressBarData.percent < 75) return `#5bc0de`;
        return `#5cb85c`;

    }

    strPercent = () => {
        if (this.state.progressBarData.percent >= 0) return this.state.progressBarData.percent + '%';
        else return ''
    }

    render() {
        return (
            <section className="progress-bar">
                <div className="myProgress">
                    <p>{this.strPercent()}</p>
                    <div className="myBar" style={this.state.progressBarData.style}
                        role="progressbar" aria-valuenow="percent"
                        aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </section>
        )
    }
}
