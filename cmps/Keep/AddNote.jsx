
export class AddNote extends React.Component {

    state = {
        note: {
            noteType: 'text',
            noteTxt: ''

        }
    }

    componentDidMount() {

    }

    getPlaceHolder = () => {
        switch (this.state.note.noteType) {
            case 'text':
                return "What's on your mind"
            case 'img':
                return 'Enter image URL...'
            case 'video':
                return 'Enter video URL...'
            case 'sound':
                return 'Enter sound URL...'
            case 'list':
                return 'Enter comma separated list'
        }
    }


    onChangeNoteType = (type) => {
        this.setState({ note: { ...this.state.note, noteType: type ,noteTxt:''} })
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const inputValue = ev.target.value
        this.setState({ note: { ...this.state.note, noteTxt: inputValue } }
        )
    }

    onSaveNote = (ev) => {
        ev.preventDefault();
        var txt = ev.target[name = 'noteText'].value
        this.setState({ note: { ...this.state.note ,noteTxt:''} },
        ()=>{this.props.saveNote(txt, this.state.note.noteType)})
    }

    render() {
        return (
            <section>
                <form className="add-note-container" onSubmit={this.onSaveNote}>
                    <input value={this.state.note.noteTxt} name="noteText" type="text" placeholder={this.getPlaceHolder()} onChange={this.handleChange} />
                </form>
                <button onClick={() => { this.onChangeNoteType('text') }}><i className="fas fa-font"></i></button>
                <button onClick={() => { this.onChangeNoteType('img') }}><i className="far fa-image"></i></button>
                <button onClick={() => { this.onChangeNoteType('video') }}><i className="fab fa-youtube"></i></button>
                <button onClick={() => { this.onChangeNoteType('sound') }}><i className="fas fa-volume-up"></i></button>
                <button onClick={() => { this.onChangeNoteType('list') }}><i className="fas fa-list"></i></button>
            </section>
        )
    }
}