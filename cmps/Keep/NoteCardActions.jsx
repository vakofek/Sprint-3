


export class NoteCardActions extends React.Component {

    state = {
        note: null
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    getPinnedClass = () => {
        return (this.state.note.isPinned) ? 'btn-pin pinned-note' : 'btn-pin'
    }

    render() {
        const { note } = this.state
        if (!note) return <div>Loading...</div>
        return (
            <div className="note-card-btn-container">
                <button className={this.getPinnedClass()} onClick={() => { this.props.onTogglePinned(note) }}><i className="fas fa-thumbtack"></i></button>
                <button><i className="fas fa-palette"></i></button>
                <button onClick={() => { this.props.onRemoveNote(note) }}><i className="far fa-trash-alt"></i></button>
                <button onClick={() => { this.props.onToggleEditMode(note) }}><i className="far fa-edit"></i></button>
            </div>
        )
    }
}



