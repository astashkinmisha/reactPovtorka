import {useEffect, useState} from 'react';
import Post from '../PostComponent/Post'
import axiosInstance from '../../service/axiosApi'
import './Posts.css'


export default function Posts(){
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState([null]);


    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]))
    }, []);

const search = (id) => {
    let searchResult = posts.find(value => value.id === id);
    console.log(searchResult);
    setPost(searchResult)
}

return(
    <div className={'wrap'}>
        <div className={'post-box'}>
            {
                posts.map((value) => <Post
                key={value.id}
                item={value}
                search={search}
                />)
            }

        </div>
<div className={'single-post-box'}>
    {
        post ? (<h2>{post.id} - {post.title} - {post.body}</h2>) : (<div>post is not defined</div>)
    }
</div>
    </div>
)
}
