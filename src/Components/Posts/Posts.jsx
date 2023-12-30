import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Posts.css';

const Posts = (props) => {
    console.log(props.blog)
    const { date, title, author, hashtags, profile_pic, blog_img, reading_time } = props.blog;

    
    return (
        <div>
                        <img className='blog-img' src={blog_img} srcSet='' />
            
            <div className="profile-area">
                            {/* profile pic and author details */}
                        <div className='profile'>
                            <img className='profile-pic' src={profile_pic}/>
                        <div className='author-details'>
                            <p>{author}</p>
                            <p>{date}</p>
                        </div>
                        </div>

                        {/* min read area */}

                        <div className="bookmark-area">

                            <div className='bookmark-text'>
                                 <p>{reading_time}</p>
                               </div>
                               
                               <div className='bookmark-icon'>
                               <FontAwesomeIcon className='bookmark-btn-icon' icon={faBookmark} />
                               </div>

                            </div>
                        </div>

                        {/* name section of the blog */}
            </div>
           
        
    );
};

export default Posts;