

export class SearchNote extends React.Component{

    state = {
        searchTxt: ''
    }

    handleChange = (ev) => {
        ev.preventDefault()
        this.setState({ searchTxt: ev.target.value }, () => {
            this.props.OnSearchNote(this.state.searchTxt)
        })
    }

    render() {
        return (
            <div className="search-note">
                <input type="search" placeholder="Search a note" onChange={this.handleChange} />
            </div>
        )
    }

}