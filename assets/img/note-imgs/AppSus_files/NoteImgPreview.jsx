import { NoteCardActions } from '../../cmps/Keep/NoteCardActions.jsx'

export class NoteImgPreview extends React.Component {
    state = {
        note: null,
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {

        ev.preventDefault()
        const inputName = ev.target.name
        const inputValue = ev.target.value
        this.setState({ note: { ...this.state.note, info: { ...this.state.note.info, [inputName]: inputValue } } })
    }

    onSaveChange = (ev) => {
        ev.preventDefault()
        this.props.onSaveEdit(this.state.note)
    }



    render() {
        if (!this.state.note) return <div>loading...</div>
        const { note, onTogglePinned, onToggleEditMode, onRemoveNote, updateStyle, onSaveEdit } = this.props
        const { info, isEditMode } = this.state.note
        return (
            <div className={'note-card ' + this.state.note.style.backgroundColor}>
                {!isEditMode && <div className="note-img-card">
                    <h2 onClick={() => { onToggleEditMode(this.state.note) }}>{info.title}</h2>
                    <img src={info.url} />
                </div>}
                {isEditMode && <div className="note-img-card">
                    <form onSubmit={this.onSaveChange}>
                        <input name="title" value={info.title} onChange={this.handleChange} />
                    </form>
                    <img src={info.url} />
                    <form onSubmit={this.onSaveChange}>
                        <input name="url" type="text" onChange={this.handleChange} placeholder='Enter image URL...' />
                    </form>
                </div>}
                <NoteCardActions updateStyle={updateStyle} onToggleEditMode={onToggleEditMode} onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />
            </div>
        )
    }
}