
export class SearchMail extends React.Component {
    state = {
        searchTxt: ''
    }

    handleChange = (ev) => {
        ev.preventDefault()
        this.setState({ searchTxt: ev.target.value }, () => {
            this.props.OnSearchMail(this.state.searchTxt)
        })
    }

    render() {
        return (
            <div className="email-search">
                <input type="search" placeholder="Search a mail" onChange={this.handleChange} />
            </div>
        )
    }
}