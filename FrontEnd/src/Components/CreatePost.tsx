import React, { useState } from 'react';
import { createPost } from '../Api.tsx';
import { MdOutlineCreateNewFolder } from "react-icons/md";


const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
  
    const handlePost = async (e) => {
      e.preventDefault();
      try {
        // Envia os dados para a API .NET, que vai interagir com o Firebase
        await createPost(title, content, imageUrl);
        alert('Post criado com sucesso!');
        setTitle('');
        setContent('');
        setImageUrl('');
      } catch (err) {
        setError(err.message);  // Exibe erro se houver falha na criação
      }
    };
  
    return (
      <div>
        <div className='Criarpostbox'>
          <h2>Publique uma nova notícia</h2>
          <div>
            <form onSubmit={handlePost}>
              <div>
                <input
                  type="text"
                  placeholder="Título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  placeholder="Conteúdo"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="URL / Link da Imagem"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              <div><button type="submit"><MdOutlineCreateNewFolder /></button></div>
            </form>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default PostForm;