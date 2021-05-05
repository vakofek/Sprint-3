
export class NoteTextPreview extends React.Component {
    state = {}

    render() {

        const { note } = this.props

        return (
            <div className="note-card note-text-card">
                <p>{note.info.txt}</p>
                <div className="note-card-btn-container">
                    <button><i className="fas fa-thumbtack"></i></button>
                    <button><i className="fas fa-palette"></i></button>
                </div>
            </div>
        )
    }
}