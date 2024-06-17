
export default function TodoCard(props) {
    const {item, index, handleDeleteTodo, handleEditTodo} = props
    
    return (
        <li>
            <p>{item}</p>
            <div>
                <i className="fa-regular fa-pen-to-square" onClick={()=>{
                    handleEditTodo(index)
                }}></i>
                <i className="fa-regular fa-trash-can" onClick={()=>{
                    handleDeleteTodo(index)
                }}></i>
            </div>
        </li>
    )
}
