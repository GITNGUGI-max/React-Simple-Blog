import React from 'react';
import {Link} from 'react-router-dom';


const BlogList=({blogs, title}) =>{
  return (

    <div>
        <h1>{title}</h1>
        {blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
                <p>Written by <b> {blog.author} </b></p>
              </Link>
                
                
               
            </div>
        ))}    </div>
  )
}

export default BlogList