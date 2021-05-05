import { keepService } from '../../services/Keep/keep.service.js'
import { NoteTextPreview } from '../../cmps/Keep/NoteTextPreview.jsx'
import { NoteListPreview } from '../../cmps/Keep/NoteListPreview.jsx'
import { NoteImgPreview } from '../../cmps/Keep/NoteImgPreview.jsx'
import { NoteSoundPreview } from '../../cmps/Keep/NoteSoundPreview.jsx'
import { NoteVideoPreview } from '../../cmps/Keep/NoteVideoPreview.jsx'
import { eventBusService } from '../../services/event-bus-service.js'
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
            .then((note) => {
                this.loadNotes()
            })
    }

    onRemoveNote=(note)=>{
        keepService.removeNote(note.id)
        .then((note) => {
            this.loadNotes()
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
            <section className="note-list">

                { notes.map((note) => {
                    return <DynamicCmp key={note.id} note={note} loadNotes={this.loadNotes} onTogglePinned={this.onTogglePinned} onRemoveNote={this.onRemoveNote} />
                })}


            </section>
        )
    }
}