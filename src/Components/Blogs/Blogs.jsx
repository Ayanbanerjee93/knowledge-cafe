import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Posts from '../Posts/Posts';
import Bookmark from '../Bookmarks/Bookmark';
import Time from '../Time/Time';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogTopic, setBlogTopic] = useState([]);
    const [spentTime, setSpentTime] = useState([]);
    

    useEffect(() => {
        fetch('/public/fakeData/products.json')
            .then(res => res.json())
            .then(data => {setBlogs(data)})
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const bookMarkButton = (blog) => {
        const newBlogTopic = [...blogTopic, blog];
        setBlogTopic(newBlogTopic);
        setSpentTime(spentTime + parseInt(blog.reading_time, 10));
        // console.log(newBlogTopic);
    }



    return (
        <div className='blog-container'>
            {/*=========================All Blogs Display Area=========================  */}
            
            <div className="blog-body">
                {blogs.map(blog => (
                    <Posts
                        key={blog.id}
                        blog={blog}
                        bookMarkButton={bookMarkButton}
                    />
                ))}
            </div>

            {/* bookmark section */}
            <div className="">  

               
                <div className="bookmarked-area">

                    <Time key={spentTime.id} 
                    spentTime={spentTime} />

                    <Bookmark
                    key={blogTopic.id}
                    blogTopic={blogTopic}/>
                    
                </div>
            </div>

             
       {/* Spent time section */}
      {
       
          

      }

           
        </div>
    );
};

export default Blogs;
