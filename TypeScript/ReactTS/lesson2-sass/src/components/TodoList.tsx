interface TodoListProps{
  items:{id:string,text:string}[]
}



const TodoList:React.FC<TodoListProps> = props => {
  return (
    <ul className="list-group col-4">
      {props.items.map((i:any,c:number)=>(
        <li className="list-group-item" key={c}>{i.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
