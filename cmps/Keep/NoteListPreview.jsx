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
        const inputName = ev.target.name
        const inputValue = ev.target.value
        if (inputName === 'todo-label') this.setState({ note: { ...this.state.note, info: { ...this.state.note.info, lable: inputValue } } })
        else this.setState({ todo: { txt: inputValue, doneAt: null } })
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

    saveLable = () => {
        console.log('hi');
        this.props.onSaveEdit(this.state.note , true)
    }

    render() {
        if (!this.state.note) return <div>loading...</div>
        const { note, onTogglePinned, onRemoveNote, onToggleEditMode, updateStyle } = this.props
        const { info, isEditMode } = (!this.state.note) ? note : this.state.note


        return (
            <div className={'note-card note-list-card ' + this.state.note.style.backgroundColor}>
                {!isEditMode && <h3 onClick={() => { onToggleEditMode(this.state.note) }}>{info.lable}</h3>}
                {isEditMode && <form onSubmit={this.saveLable}>
                    <input name="todo-label" value={info.lable} onChange={this.handleChange} />
                </form>}

                <ul>
                    {info.todos.map((todo, idx) => {
                        return <li key={idx + note.id} onClick={() => { this.onToggleTodo(idx) }} className={this.getTodoClass(todo)} >{todo.txt}</li>
                    })}
                </ul>
                { !note.isEditMode && <NoteCardActions updateStyle={updateStyle} onToggleEditMode={onToggleEditMode} onRemoveNote={onRemoveNote} onTogglePinned={onTogglePinned} note={note} />}
                {note.isEditMode && <div>
                    <form onSubmit={this.saveTodo} >
                        <input name="todo-list" onChange={this.handleChange} />
                    </form>
                    <button onClick={() => { onToggleEditMode(this.state.note) }}><i className="far fa-window-close"></i></button>
                </div>}
            </div>
        )
    }
}



