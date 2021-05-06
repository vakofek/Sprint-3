
export class ProgressBar extends React.Component {
    state = {
        percent: null,
        style: {
            width: null,
            backgroundColor: null,
            minWidth: '1%'
        }

    }

    componentDidMount() {
        this.setState({ percent: this.props.onGetReadStatistics() });
    }

    updateStyle = () => {
        this.setState({
            style: {
                width: this.state.percent,
                backgroundColor: this.deterColor(),
                minWidth: '1%'
            }
        })
    }

    deterColor = () => {
        if (+this.state.percent < 25) return `#d9534f`;
        if (+this.state.percent < 50) return `#f0ad4e`;
        if (+this.state.percent < 75) return `#5bc0de`;
        return `#5cb85c`;

    }

    strPercent = () => {
        if (this.state.percent >= 0) return this.state.percent + '%';
        else return ''
    }



    render() {
        var style = this.updateStyle()
        return (
            <section className="progress-bar">
                <div className="myProgress">
                    <p>{this.strPercent()}</p>
                    <div className="myBar" style={style}
                        role="progressbar" aria-valuenow="percent"
                        aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </section>
        )
    }
}
