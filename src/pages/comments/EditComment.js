import React, { useState } from 'react';
import api from './api';

export const CommentComponent = ({ comment }) => {
  const [text, setText] = useState(comment.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async () => {
    try {
      const response = await api.put(`/comments/${comment.id}/`, { text });
      alert('Comentario actualizado');
      setIsEditing(false);
    } catch (error) {
      alert('Error al actualizar el comentario');
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/comments/${comment.id}/`);
      alert('Comentario eliminado');
    } catch (error) {
      alert('Error al eliminar el comentario');
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleEdit}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <p>{comment.text}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </>
      )}
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};
