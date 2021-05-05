import { NoteCardActions } from '../../cmps/Keep/NoteCardActions.jsx'
import { keepService } from '../../services/Keep/keep.service.js'


export class NoteListPreview extends React.Component {
    state = {
        note: null,
        todo: { txt: '', doneAt: null }
    }

    componentDidMount() {
        this.setState({ note: this.props.note })
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const inputValue = ev.target.value
        this.setState({ todo: { txt: inputValue, doneAt: null } })
    }

    onToggleTodo = (todoIdx) => {
        keepService.toggleTodo(todoIdx, this.state.note)
        this.props.loadNotes()
    }

    getTodoClass = (todo) => {
        return (todo.doneAt) ? 'todo-done' : ''
    }

    saveTodo = () => {
        var newTodos = this.state.note.info.todos
        newTodos.push(this.state.todo)
        var newNote = this.state.note
        newNote.info.todos = newTodos
        this.props.onSaveEdit(newNote)
    }

    render() {
        const { note, onTogglePinned, onRemoveNote, onToggleEditMode } = this.props
        const { info } = note
        return (
            <div className="note-card note-list-card">
                <h3>{info.lable}</h3>
                <ul>
                    {info.todos.map((todo, idx) => {
                        return <li key={idx + note.id} onClick={() => { this.onToggleTodo(idx) }} className={this.getTodoClass(todo)} >{todo.txt}</li>
                    })}
                </ul>
                { !note.isEditMode && <NoteCardActions onToggleEditMode={onToggleEditMode} onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />}
                {note.isEditMode && <div>
                    <form onSubmit={this.saveTodo} >
                        <input onChange={this.handleChange} />
                    </form>
                    <button onClick={() => { onToggleEditMode(this.state.note) }}><i className="far fa-window-close"></i></button>
                </div>}
            </div>
        )
    }
}



