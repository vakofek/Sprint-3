import { keepService } from '../../services/Keep/keep.service.js'
import { NoteTextPreview } from '../../cmps/Keep/NoteTextPreview.jsx'
import { NoteListPreview } from '../../cmps/Keep/NoteListPreview.jsx'
import { NoteImgPreview } from '../../cmps/Keep/NoteImgPreview.jsx'
import { NoteSoundPreview } from '../../cmps/Keep/NoteSoundPreview.jsx'
import { NoteVideoPreview } from '../../cmps/Keep/NoteVideoPreview.jsx'
export class NoteList extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        sortBy: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy, this.state.sortBy)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    render() {

        const DynamicCmp = (props) => {
            console.log(props);
            switch (props.note.type) {
                case 'text':
                    console.log('הגענו לטקסט');
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
            <section className="note-list-container">

                { notes.map((note) => {
                    return <DynamicCmp key={note.id} note={note} loadNotes={this.loadNotes} />
                })}


                {/* { notes.map((note) => {
                    return <NotePreview key={note.id} mail={mail} loadNotes={this.loadNotes} />
                })} */}

            </section>
        )
    }
}