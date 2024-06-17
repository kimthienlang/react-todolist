import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, handleDeleteTodo, handleEditTodo} = props
    return (
        <ul className='list-items'>
            {todos.map((item, index) => {
                return (
                    <TodoCard key={index} {...props} item={item} index={index}>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
