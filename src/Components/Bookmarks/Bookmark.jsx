import React from 'react';

const Bookmark = (props) => {
    const blogTopic = props.blogTopic;

    return (
        <div>
            <h3>All bookmarks showing here: {blogTopic.length}</h3>
            <div>
                {blogTopic.map(blog => (
                    <div key={blog.id}>
                        <p>{blog.author}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookmark;
