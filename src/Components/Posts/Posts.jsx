import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Posts.css';

const Posts = (props) => {
    const { date, title, author, hashtags, profile_pic, blog_img, reading_time } = props.blog;
    
    const bookMarkButton = props.bookMarkButton;
    console.log(bookMarkButton)

    

    // const [post , setPost] = useState([]);

  
    return (
        <div className='blog-body'>
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
                               <FontAwesomeIcon 
                              
                               className='bookmark-btn-icon' icon={faBookmark}
                               onClick={ ()=> bookMarkButton()} />
                               </div>

                            </div>
                        </div>

                        {/* name section of the blog */}

                        <h1 className="blog-title">
                            {title}
                        </h1>
                        <div className='blog-hashtags'>
                            {hashtags}
                        </div>
                        <div className='mark-as-read'>
                            <a href="">Mark as read</a>
                        </div>
                        <hr className='hr' />
            </div>
           
        
    );
};

export default Posts;