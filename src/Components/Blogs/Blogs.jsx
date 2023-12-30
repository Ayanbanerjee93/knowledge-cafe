import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Posts from '../Posts/Posts';
import Bookmark from '../Bookmarks/Bookmark';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [blogTopic , setBlogTopic] = useState([]);
    

    useEffect( ()=>{

        fetch('/public/fakeData/products.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])


    const bookMarkButton = (blog) => {

       const newBlogTopic=[...blogTopic, blog ]
       setBlogTopic(newBlogTopic)
}
    return (
        <div className='blog-container'>

            {/* all blogs display area */}

           <div className="blog-body">

             

                 {
                   blogs.map(blog => <Posts
                    key={blog.id}
                    blog={blog}
                    bookMarkButton={bookMarkButton}

                     ></Posts>) 
                 }
            
           </div>


                       {/* bookmark section */}

        <div className="">

            <div className="spent-time">
                <h4>Spent time on read: 177m</h4>
            </div>

            <div className="bookmarked-area">

                   <Bookmark blogTopic={blogTopic}></Bookmark>

            </div>
        </div>
            
        </div>

    );
};

export default Blogs;