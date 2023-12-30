import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Posts from '../Posts/Posts';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{

        fetch('/public/fakeData/products.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className='blog-container'>

            {/* all blogs display area */}

           <div className="blog-body">

             

                 {
                   blogs.map(blog => <Posts
                    key={blog.id}
                    blog={blog}

                     ></Posts>) 
                 }
            
           </div>


           {/* bookmark section */}
        <div className="">
            <div className="spent-time">
                <h4>Spent time on read: 177m</h4>
            </div>
            <div className="bookmarked-area">

            <h3>All book marks showing here:{blogs.length} </h3>
            </div>

            </div>
        </div>

    );
};

export default Blogs;