import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Posts from '../Posts/Posts';
import Bookmark from '../Bookmarks/Bookmark';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogTopic, setBlogTopic] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        fetch('/public/fakeData/products.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setDataFetched(true);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const bookMarkButton = (blog) => {
        const newBlogTopic = [...blogTopic, blog];
        setBlogTopic(newBlogTopic);
        console.log(newBlogTopic);
    }

    return (
        <div className='blog-container'>
            {/* all blogs display area */}
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
                <div className="spent-time">
                    {/* <h4>Spent time on read: 177m</h4> */}
                </div>
                <div className="bookmarked-area">
                    <Bookmark blogTopic={blogTopic} />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
