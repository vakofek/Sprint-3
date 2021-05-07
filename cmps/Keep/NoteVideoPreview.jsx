import { NoteCardActions } from '../../cmps/Keep/NoteCardActions.jsx'

export class NoteVideoPreview extends React.Component {
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

    getVideoId = () => {
        var url = this.state.note.info.url;
        var id = url.substring(url.indexOf('?') + 3, url.length)
        return id;
    }

    render() {

        if (!this.state.note) return <div>loading...</div>
        const { note, onTogglePinned, onToggleEditMode, onRemoveNote, updateStyle, onSaveEdit } = this.props
        const { info, isEditMode } = this.state.note

        return (
            <div className={'note-card ' + this.state.note.style.backgroundColor}>
                {!isEditMode && <div  className="note-video-card">
                    <h2 onClick={() => { onToggleEditMode(this.state.note) }}>{info.title}</h2>
                    <iframe src={`https://www.youtube.com/embed/${this.getVideoId()}`}></iframe>
                </div>}
                {isEditMode && <div className="note-video-card">
                    <form onSubmit={this.onSaveChange}>
                        <input name="title" value={info.title} onChange={this.handleChange} />
                    </form>
                    <iframe src={`https://www.youtube.com/embed/${this.getVideoId()}`}></iframe>
                    <form onSubmit={this.onSaveChange}>
                        <input name="url" type="text" onChange={this.handleChange} placeholder='Enter video URL...' />
                    </form>
                </div>}
                <NoteCardActions updateStyle={updateStyle} onToggleEditMode={onToggleEditMode} onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />
            </div>
        )
    }

}
