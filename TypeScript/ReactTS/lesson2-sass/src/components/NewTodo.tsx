import { useRef } from "react";

type NewTodoProps={
    onAddTodo:(todoText:string)=>void
}

const NewTodo:React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler =(e:React.FormEvent)=>{
        e.preventDefault();
        const enterText = textInputRef.current?.value;
        if (!enterText) {
            alert('please fill input')
        }else{
            props.onAddTodo(enterText);
        }
        
    }
  return (
    <form className="col-4" onSubmit={todoSubmitHandler}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add todo" ref={textInputRef} />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
