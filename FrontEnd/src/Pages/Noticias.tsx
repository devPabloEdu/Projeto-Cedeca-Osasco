import React, { useState, useEffect } from 'react';
import { getPosts } from '../Api.tsx';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const data = await getPosts();  // Faz a requisição para obter os posts
          setPosts(data);
        } catch (err) {
          setError(err.message);  // Exibe erro se houver falha
        }
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div>
        <div className='postsbox'>
            <h2>ULTIMAS NOTÍCIAS</h2>
            {error && <p>{error}</p>}
            <ul>
              {posts.map((post, index) => (
                <div className='Noticiabox'>
                    <li key={index}>
                      <div className='noticiasflex'>
                          <div>
                              <h3>{post.Title}</h3>
                              <p>{post.Content}</p>
                          </div>
                          <div>{post.ImageUrl && <img src={post.ImageUrl} alt={post.Title}/>}</div>
                      </div>
                    </li>
                </div>
              ))}
            </ul>
        </div>
      </div>
    );
  };
  
  export default PostList;