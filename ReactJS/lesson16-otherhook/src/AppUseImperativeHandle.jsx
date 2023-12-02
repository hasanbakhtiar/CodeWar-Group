import React, { forwardRef, useImperativeHandle, useRef } from 'react'


const MyInput =forwardRef((props,ref)=>{

    useImperativeHandle(ref,()=>({
        hi:sayHi
    }))

    const sayHi=()=>{
        alert("new value")
    }
  
    return <div><input type="text" /></div>
})




const AppUseImperativeHandle = () => {
    const inputRef  = useRef();
    const handleClick = ()=>{
        inputRef.current.hi();
    }
    return (
        <div style={{"display":"flex"}}>
         <MyInput ref={inputRef} /><button onClick={handleClick}>send</button>
        </div>
    )
}

export default AppUseImperativeHandle