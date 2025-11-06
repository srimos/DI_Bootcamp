const ToDo = (props) => {
    let {id, label} = props
    return (
        <div className="todo" id={id}>{label}</div>
    )
}

export default ToDo