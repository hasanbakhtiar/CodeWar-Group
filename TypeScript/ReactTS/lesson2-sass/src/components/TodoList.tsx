interface TodoListProps{
  items:{id:string,text:string}[]
  ondeleteTodo:(id:string)=>void
}



const TodoList:React.FC<TodoListProps> = props => {
  return (
    <ul className="list-group col-4">
      {props.items.map((i:any,c:number)=>(
        <li className="list-group-item" key={c}>{i.text}
        <button className="btn btn-danger " onClick={props.ondeleteTodo.bind(null,i.id)}>X</button></li>
      ))}
    </ul>
  );
};

export default TodoList;
