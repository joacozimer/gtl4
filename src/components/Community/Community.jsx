import React, { useState } from 'react';
import styles from './Community.module.css';
import texts from '../../data/texts';

const CommunityPage = ({ language }) => {
    // Estado para almacenar las publicaciones del foro.
    // Lo inicializamos con un array vacío como solicitaste.
    const [posts, setPosts] = useState([]);

    // Estado para los campos del nuevo post
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');

    // Manejador para el envío del formulario
    const handlePostSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        if (newPostTitle.trim() === '' || newPostContent.trim() === '') {
            alert('Por favor, completa el título y el contenido.');
            return;
        }

        const newPost = {
            id: Date.now(), // ID único basado en el timestamp
            title: newPostTitle,
            content: newPostContent,
        };

        // Añade el nuevo post al principio de la lista
        setPosts([newPost, ...posts]);

        // Limpia los campos del formulario
        setNewPostTitle('');
        setNewPostContent('');
    };


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{texts.communityPage.title[language]}</h1>
            <p className={styles.description}>{texts.communityPage.description[language]}</p>

            {/* Formulario para crear una nueva consulta */}
            <div className={styles.newPostForm}>
                <h2>{texts.communityPage.newPostTitle[language]}</h2>
                <form onSubmit={handlePostSubmit}>
                    <input
                        type="text"
                        className={styles.formInput}
                        placeholder={texts.communityPage.titlePlaceholder[language]}
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                    <textarea
                        className={styles.formTextarea}
                        placeholder={texts.communityPage.contentPlaceholder[language]}
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        rows="5"
                    ></textarea>
                    <button type="submit" className={styles.submitButton}>
                        {texts.communityPage.submitButton[language]}
                    </button>
                </form>
            </div>

            {/* Listado de consultas existentes */}
            <div className={styles.postsList}>
                {/* Lógica condicional: si no hay posts, muestra un mensaje. Si hay, los lista. */}
                {posts.length === 0 ? (
                    <p className={styles.emptyForumMessage}>
                        {texts.communityPage.emptyForum[language]}
                    </p>
                ) : (
                    posts.map(post => (
                        <article key={post.id} className={styles.postItem}>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.postContent}>{post.content}</p>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommunityPage;