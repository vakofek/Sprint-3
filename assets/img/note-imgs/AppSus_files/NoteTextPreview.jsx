
import { NoteCardActions } from '../../cmps/Keep/NoteCardActions.jsx'

export class NoteTextPreview extends React.Component {
    state = {
        note: null,
        noteTxt: ''
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const inputValue = ev.target.value
        this.setState({ note: { ...this.state.note, info: { ...this.state.note.info, txt: inputValue } } })
    }

    render() {
        if (!this.state.note) return <div>loading...</div>
        const { note, onTogglePinned, onToggleEditMode, onRemoveNote, onSaveEdit, updateStyle } = this.props
        const { isEditMode, info } = this.state.note

        return (
            <div className={'note-card ' + this.state.note.style.backgroundColor}>
                {!isEditMode && <div className="note-text-card">
                    <p onClick={() => { onToggleEditMode(this.state.note) }}>{info.txt}</p>
                </div>}
                {isEditMode && <form className="note-text-card" onSubmit={(ev) => {
                    ev.preventDefault()
                    onSaveEdit(this.state.note)
                }}>
                    <textarea value={info.txt} onChange={this.handleChange} > </textarea>
                    <button><i className="far fa-save"></i></button>
                </form>}
                <NoteCardActions updateStyle={updateStyle} onToggleEditMode={onToggleEditMode} onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />
            </div>
        )
    }
}