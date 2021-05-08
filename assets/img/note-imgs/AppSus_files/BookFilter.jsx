

export class BookFilter extends React.Component {

    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: ''
        }
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const inputName = ev.target.name
        const inputValue = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        this.setState({filterBy : {...this.state.filterBy, [inputName]: inputValue}}, ()=> {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    render() {
        return <form className="book-filter">
                <input type="text" placeholder="Title" name="title" onChange={this.handleChange} />
                <input type="number" placeholder="Min Price" name="minPrice" onChange={this.handleChange} />
                <input type="number" placeholder="Max Price" name="maxPrice" onChange={this.handleChange} />
            </form>
    }
}
