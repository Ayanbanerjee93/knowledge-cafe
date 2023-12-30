import React from 'react';

const Bookmark = (props) => {
    const blogTopic = props.blogTopic;
    console.log(props.author)

   
    return (
        <div>
             <h3>All book marks showing here:{blogTopic.length} </h3>
             <div>
               <p>{blogTopic.author}</p> 
             </div>
        </div>
    );
};

export default Bookmark;