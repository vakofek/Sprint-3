
import { NoteCardActions } from '../../cmps/Keep/NoteCardActions.jsx'

export class NoteTextPreview extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    render() {
        const { note, onTogglePinned, onRemoveNote } = this.props

        return (
            <div className="note-card note-text-card">
                <p>{note.info.txt}</p>
                <NoteCardActions onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />
            </div>
        )
    }
}