import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const blogTopic = props.blogTopic;
    

    return (
        <div>
        
         
            <h3>All bookmarks showing here: {}</h3>
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
