import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/todoSlice";

const App = () => {

    const [text,setText] = useState<string>("");
    const todoData:any = useSelector((p:any)=>p.todos);
    const dispatch:any = useDispatch();
    const handleSubmited =(event:React.FormEvent)=>{
        event.preventDefault();
        dispatch(add(text));
        setText("");
        
    }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
    <h1 className="my-5">Todo App</h1>
      <form className="col-4" onSubmit={handleSubmited}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
      <ul className="list-group col-4">
      {todoData.map((i:any,c:number)=>(
        <li className="list-group-item" key={c}>{i.text}</li>
      ))}
    </ul>
    </div>
  );
};

export default App;
