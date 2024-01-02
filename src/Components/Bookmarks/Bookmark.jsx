import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const blogTopic = props.blogTopic;
    

    return (
        <div>
        
         
            <h3 className='Bookmarked-Blogs-length'>Bookmarked Blogs :  {blogTopic.length}</h3>
            <div>
                {blogTopic.map(blog => (
                    <div className='bookmark-body' key={blog.id}>
                       
                        <p>Title: {blog.title}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookmark;
