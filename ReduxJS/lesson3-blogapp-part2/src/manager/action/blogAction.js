export const addBlog =({title,desc})=>({
    type:"CREATE_BLOG",
    
    blog:{
      id:crypto.randomUUID(),
      title,
      desc    }
  })