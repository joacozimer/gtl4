import React, { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import { FaTrashAlt } from 'react-icons/fa';

function Chat({ theme = "light" }) {
    const [messages, setMessages] = useState(() => {
        const savedHistory = localStorage.getItem('chatHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatBoxRef = useRef(null);
    const [clearing, setClearing] = useState(false);
    const SERVER_URL = 'http://localhost:5000';

    const inputRef = useRef(null);

    // Efecto para mantener el scroll al final
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    // Enfocar el input cuando el componente se monta por primera vez
    // y cada vez que el estado 'input' cambia
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }); // La falta de un array de dependencias asegura que se ejecute en cada render

    // Efecto para guardar el historial en localStorage
    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }, [messages]);

    const clearChat = () => {
        setClearing(true);
        setTimeout(() => {
            localStorage.removeItem('chatHistory');
            setMessages([]);
            setClearing(false);
        }, 300);
    };

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        setLoading(true);

        try {
            const res = await fetch(SERVER_URL + "/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const data = await res.json();
            const botMessage = { role: "assistant", content: data.reply };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const botMessage = { role: "assistant", content: "⚠️ Error al conectar con el servidor." };
            setMessages((prev) => [...prev, botMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${styles.chatContainer} ${theme === "dark" ? styles.dark : ""}`}>
            <div className={styles.chatHeader}>
                Asistente Virtual
                <button onClick={clearChat} className={styles.clearChatButton} title="Vaciar chat">
                    <FaTrashAlt />
                </button>
            </div>
            <div className={`${styles.chatBox} ${clearing ? styles.clearing : ''}`} ref={chatBoxRef}>
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`${styles.message} ${msg.role === "user" ? styles.userMessage : styles.botMessage}`}
                    >
                        <div className={styles.messageContent}>{msg.content}</div>
                    </div>
                ))}
                {loading && (
                    <div className={`${styles.message} ${styles.botMessage} ${styles.typingAnimation}`}>
                        <div className={styles.messageContent}>Escribiendo...</div>
                    </div>
                )}
            </div>
            <div className={styles.inputArea}>
                <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className={styles.input}
                    disabled={loading}
                    ref={inputRef}
                />
                <button onClick={sendMessage} className={styles.sendButton} disabled={loading}>
                    ➤
                </button>
            </div>
        </div>
    );
}

export default Chat;