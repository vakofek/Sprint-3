

export class NoteCardActions extends React.Component {

    state = {
        note: null,
        isStyleMode: false
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    getPinnedClass = () => {
        return (this.state.note.isPinned) ? 'btn-pin pinned-note' : 'btn-pin'
    }

    toggleStyleMode = () => {
        this.setState({ isStyleMode: !this.state.isStyleMode })
    }

    onUpdateStyle = (color) => {
        console.log(color);
        this.props.updateStyle(color , this.state.note.id)
        this.toggleStyleMode()
    }

    render() {
        const { note } = this.state
        if (!note) return <div>Loading...</div>
        return (
            <div className="note-card-btn-container">
                { !this.state.isStyleMode && <React.Fragment>
                    <button className={this.getPinnedClass()} onClick={() => { this.props.onTogglePinned(note) }}><i className="fas fa-thumbtack"></i></button>
                    <button onClick={this.toggleStyleMode}><i className="fas fa-palette"></i></button>
                    <button onClick={() => { this.props.onRemoveNote(note) }}><i className="far fa-trash-alt"></i></button>
                    <button onClick={() => { this.props.onToggleEditMode(note) }}><i className="far fa-edit"></i></button>
                </React.Fragment>}

                {this.state.isStyleMode && <div className="color-btn-container">
                    <button onClick={this.toggleStyleMode}><i className="fas fa-times"></i></button>
                    <button className="color-btn red"  onClick={()=>{this.onUpdateStyle('red')}}></button>
                    <button className="color-btn green" onClick={()=>{this.onUpdateStyle('green')}}></button>
                    <button className="color-btn blue" onClick={()=>{this.onUpdateStyle('blue')}}></button>
                    <button className="color-btn yellow" onClick={()=>{this.onUpdateStyle('yellow')}}></button>
                </div>}
            </div>
        )
    }
}



