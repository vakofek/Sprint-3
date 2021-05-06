
export class SearchMail extends React.Component {
    static = {
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
            <div className="">
                <input type="search" placeholder="Search a mail" onChange={this.handleChange} />
            </div>
        )
    }
}