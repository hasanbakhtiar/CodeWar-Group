export const addBlog =({title,desc})=>({
    type:"CREATE_BLOG",
    
    blog:{
      id:crypto.randomUUID(),
      title,
      desc    }
  })

  export const editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id,
    update

  })


  export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id
  })