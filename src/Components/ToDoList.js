import ToDoItem from "./ToDoItem";
import toDo from "../data"

const ToDoList = () => {
    return (
        <section>
            <h1>To Do List</h1>
            <div>
                {toDo.map((toDo, key) =>
                    <ToDoItem
                        key={key}
                        img={toDo.img}
                        id={toDo.id}
                        completed={toDo.completed}
                        task={toDo.task}
                    />
                )}
            </div>
            <div className="img">
                <div className="imgOne"></div>
                <div className="imgTwo"></div>
                <div className="imgThree"></div>
                <div className="imgFour"></div>

            </div>
        </section>
    );
}

export default ToDoList;