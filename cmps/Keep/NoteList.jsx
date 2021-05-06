import { keepService } from '../../services/Keep/keep.service.js'
import { NoteTextPreview } from '../../cmps/Keep/NoteTextPreview.jsx'
import { NoteListPreview } from '../../cmps/Keep/NoteListPreview.jsx'
import { NoteImgPreview } from '../../cmps/Keep/NoteImgPreview.jsx'
import { NoteSoundPreview } from '../../cmps/Keep/NoteSoundPreview.jsx'
import { NoteVideoPreview } from '../../cmps/Keep/NoteVideoPreview.jsx'
import { eventBusService } from '../../services/event-bus-service.js'
import { SearchNote } from '../../cmps/Keep/SearchNote.jsx'
export class NoteList extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        sortBy: null
    }


    removeReloadEvent;

    componentDidMount() {
        this.removeReloadEvent = eventBusService.on('update-note-list', this.loadNotes)
        this.loadNotes()
    }

    componentWillUnmount() {
        this.removeReloadEvent()
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy, this.state.sortBy)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    onTogglePinned = (note) => {
        keepService.toggleIsPinned(note.id)
            .then(() => {
                this.loadNotes()
            })
    }

    onToggleEditMode = (note) => {
        keepService.toggleIsEditMode(note.id)
            .then(() => {
                this.loadNotes()
            })
    }

    onRemoveNote = (note) => {
        keepService.removeNote(note.id)
            .then(() => {
                this.loadNotes()
            })
    }

    onSaveEdit = (note, isLable = false) => {
        keepService.updateNote(note, isLable)
            .then(() => {
                this.loadNotes()
            })
    }

    updateStyle = (color, id) => {
        keepService.updateNoteStyle(color, id)
            .then(() => {
                this.loadNotes()
            })
    }

    OnSearchNote = (searchTxt) => {
        keepService.searchNote(searchTxt.toUpperCase())
            .then((notes) => {
                this.setState({ notes })
            })
    }


    render() {

        const DynamicCmp = (props) => {
            switch (props.note.type) {
                case 'text':
                    return <NoteTextPreview {...props} />
                case 'list':
                    return <NoteListPreview {...props} />
                case 'img':
                    return <NoteImgPreview {...props} />
                case 'sound':
                    return <NoteSoundPreview {...props} />
                case 'video':
                    return <NoteVideoPreview {...props} />
            }
        }



        const { notes, sortBy } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section className="note-gallery">
                <SearchNote OnSearchNote={this.OnSearchNote} />
                <div className="note-list">
                    {notes.map((note) => {
                        return <DynamicCmp key={note.id} updateStyle={this.updateStyle} note={note} loadNotes={this.loadNotes} onTogglePinned={this.onTogglePinned} onRemoveNote={this.onRemoveNote} onToggleEditMode={this.onToggleEditMode} onSaveEdit={this.onSaveEdit} />
                    })}
                </div>


            </section>
        )
    }
}
