export class Sort extends React.Component {

    state = {
        sortBy: null,
        sortDateIconState: false,
        sortSubjectIconState: false
    }


    sortBy = (sortBy) => {
        if (sortBy === 'byDate') this.setState({ sortDateIconState: !this.state.sortDateIconState })
        else this.setState({ sortSubjectIconState: !this.state.sortSubjectIconState })
        console.log(sortBy);
        this.props.onSortBy(sortBy)
    }

    render() {
        return (
            <div className="sort-container">
                <button onClick={() => { this.sortBy('byDate') }}>{(this.state.sortDateIconState) ? <i className="fas fa-sort-numeric-down-alt"></i> : <i className="fas fa-sort-numeric-up-alt"></i>}</button>
                <button onClick={() => { this.sortBy('bySubject') }}>{(this.state.sortSubjectIconState) ? <i className="fas fa-sort-alpha-down"></i> : <i className="fas fa-sort-alpha-up-alt"></i>}</button>
            </div>
        )
    }
}

