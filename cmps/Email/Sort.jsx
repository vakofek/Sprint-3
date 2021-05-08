export class Sort extends React.Component {

    state = {
        sortBy: null,
        sortDateIconState: false,
        sortSubjectIconState: false,
        sortReadIconState: false
    }


    sortBy = (sortBy) => {
        var sortIcon = this.getSortByIconBoolType(sortBy);
        if (sortBy === 'byDate') this.setState({ sortDateIconState: !this.state.sortDateIconState })
        else if(sortBy === 'bySubject')this.setState({ sortSubjectIconState: !this.state.sortSubjectIconState })
        else this.setState({ sortReadIconState: !this.state.sortReadIconState })
        this.props.onSortBy(sortBy, sortIcon)
    }

    getSortByIconBoolType = (sortBy) => {
        switch (sortBy) {
            case 'byDate':
                return this.state.sortDateIconState
            case 'bySubject':
                return this.state.sortSubjectIconState
            case 'byRead':
                return this.state.sortReadIconState
        }
    }

    getReadIcon = () => {
        if (!this.state.mail) return
        return (this.state.mail.isRead) ? <i className="fas fa-envelope-open"></i> : <i className="fas fa-envelope"></i>
    }
    render() {
        return (
            <div className="sort-container">
                <button onClick={() => { this.sortBy('byDate') }}>{(this.state.sortDateIconState) ? <i className="fas fa-sort-numeric-down-alt"></i> : <i className="fas fa-sort-numeric-up-alt"></i>}</button>
                <button onClick={() => { this.sortBy('bySubject') }}>{(this.state.sortSubjectIconState) ? <i className="fas fa-sort-alpha-down"></i> : <i className="fas fa-sort-alpha-up-alt"></i>}</button>
                <button onClick={() => { this.sortBy('byRead') }}>{(this.state.sortReadIconState) ? <i className="fas fa-envelope-open"></i> : <i className="fas fa-envelope"></i>}</button>
            </div>
        )
    }
}

