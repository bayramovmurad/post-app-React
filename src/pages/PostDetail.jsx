import React from 'react';
import { useLocation } from 'react-router-dom';
import AddComment from '../components/AddComment';




const PostDetails = () => {
    const { state } = useLocation();
    const post = state && state.post;
    const date = new Date(post.timestamp.seconds * 1000);
    const formattedDate = date.toLocaleString();




    if (!post) {
        return <p className='font-semibold text-2xl text-center py-4'>Loading...</p>
    }

    return (
        <div className='ml-20 pt-4'>
            <p className='text-3xl text-white  font-semibold'>{post.post}</p>
            <p className='text-sm text-gray-500'>
                Posted by {post.author} on {formattedDate}
            </p>
            <AddComment post={post}/>
        </div>
    );
};

export default PostDetails;
