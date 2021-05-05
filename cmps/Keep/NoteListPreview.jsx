
export class NoteListPreview extends React.Component {
    state = {}

    render() {
        const { note } = this.props
        const { info } = note
        return (
            <div className="note-card note-list-card">
                <h3>{info.lable}</h3>
                <hr/>
                <ul>
                    {info.todos.map((todo,idx) => {
                        return <li key={idx+note.id}>{todo.txt}</li>
                    })}
                </ul>
                <div className="note-card-btn-container">
                    <button><i className="fas fa-thumbtack"></i></button>
                    <button><i className="fas fa-palette"></i></button>
                </div>
            </div>
        )
    }
}