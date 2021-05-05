
export class NoteVideoPreview extends React.Component{
    state={}
    
    render() {
        return(
            <div className="note-video-card">
                <h1>{this.props.note.type}</h1>
            </div>
        )
    }
}