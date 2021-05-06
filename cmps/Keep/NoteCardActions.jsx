

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
        this.props.updateStyle(color , this.state.note.id)
        this.toggleStyleMode()
    }

    render() {
        const { note } = this.state
        if (!note) return <div>Loading...</div>
        return (
            <div className="note-card-btn-container">
              <React.Fragment>
                    <button className={this.getPinnedClass()} onClick={() => { this.props.onTogglePinned(note) }}><i className="fas fa-thumbtack"></i></button>
                    <button className="btn-palette" onClick={this.toggleStyleMode}><i className="fas fa-palette"></i></button>
                    <button className="btn-remove" onClick={() => { this.props.onRemoveNote(note) }}><i className="far fa-trash-alt"></i></button>
                    <button className="btn-edit" onClick={() => { this.props.onToggleEditMode(note) }}><i className="far fa-edit"></i></button>
                </React.Fragment>

                {this.state.isStyleMode && <div className="color-btn-container">
                    {/* <button onClick={this.toggleStyleMode}><i className="fas fa-times"></i></button> */}
                    <button className="color-btn color-btn red" onClick={()=>{this.onUpdateStyle('red')}}></button>
                    <button className="color-btn color-btn green" onClick={()=>{this.onUpdateStyle('green')}}></button>
                    <button className="color-btn color-btn blue" onClick={()=>{this.onUpdateStyle('blue')}}></button>
                    <button className="color-btn color-btn yellow" onClick={()=>{this.onUpdateStyle('yellow')}}></button>
                    <button className="color-btn color-btn purple" onClick={()=>{this.onUpdateStyle('purple')}}></button>
                    <button className="color-btn color-btn orange" onClick={()=>{this.onUpdateStyle('orange')}}></button>
                    <button className="color-btn color-btn pink" onClick={()=>{this.onUpdateStyle('pink')}}></button>
                    <button className="color-btn color-btn unset" onClick={()=>{this.onUpdateStyle('unset')}}></button>
                </div>}
            </div>
        )
    }
}



