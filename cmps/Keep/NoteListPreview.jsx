import { NoteCardActions } from '../../cmps/Keep/NoteCardActions.jsx'


export class NoteListPreview extends React.Component {
    state = {
        note: null
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }


    render() {
        const { note, onTogglePinned, onRemoveNote } = this.props
        const { info } = note
        return (
            <div className="note-card note-list-card">
                <h3>{info.lable}</h3>
                <ul>
                    {info.todos.map((todo, idx) => {
                        return <li key={idx + note.id}>{todo.txt}</li>
                    })}
                </ul>
                <NoteCardActions onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />
            </div>
        )
    }
}