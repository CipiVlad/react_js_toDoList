const ToDoItem = (props) => {
    return (
        <article>
            <p>Task Number: {props.id}</p>
            <p>Task: {props.task}</p>
            <input type="checkbox" name="Competed: {props.completed}" className="checkbox" />
        </article>
    );
}

export default ToDoItem;