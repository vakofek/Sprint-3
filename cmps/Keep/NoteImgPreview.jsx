
export class NoteImgPreview extends React.Component{
    state={}
    
    render() {
        return(
            <div className="note-img-card">
                <h1>{this.props.note.type}</h1>
            </div>
        )
    }
}