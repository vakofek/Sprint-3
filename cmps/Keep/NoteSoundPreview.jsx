
export class NoteSoundPreview extends React.Component{
    state={}
    
    render() {
        return(
            <div className="note-sound-card">
                <h1>{this.props.note.type}</h1>
            </div>
        )
    }
}