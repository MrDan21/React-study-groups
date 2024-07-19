import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export const GroupShow = () => {
  const [group, setGroup] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Obtener el detalle del grupo y sus comentarios al cargar el componente
    fetchGroupAndComments();
  }, []);

  const fetchGroupAndComments = async () => {
    try {
      // Obtener el detalle del grupo desde la API de Django
      const groupId = 1; // Sustituir esto con el ID del grupo para agregar el comentario
      const groupResponse = await axios.get(`http://localhost:8000/api/groups/${groupId}/`);
      setGroup(groupResponse.data);

      // Obtener los comentarios asociados al grupo desde la API de Django
      const commentsResponse = await axios.get(`http://localhost:8000/api/groups/${groupId}/comments/`);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching group details:", error);
      Swal.fire({
        title: "Error!",
        text: "Error al obtener los detalles del grupo y los comentarios",
        icon: "error"
      });
    }
  };

  const handleAddComment = async () => {
    try {
      // Enviar un nuevo comentario al grupo
      const groupId = 1; // Sustituir esto con el ID del grupo para agregar el comentario
      const response = await axios.post(
        `http://localhost:8000/api/groups/${groupId}/comments/`,
        { text: newComment },
        { headers: { "Content-Type": "application/json" } }
      );

      // Actualizar la lista de comentarios después de agregar uno nuevo
      setComments([...comments, response.data]);
      setNewComment("");

      Swal.fire({
        title: "¡Éxito!",
        text: "Comentario agregado exitosamente",
        icon: "success"
      });
    } catch (error) {
      console.error("Error adding comment:", error);
      Swal.fire({
        title: "Error!",
        text: "Error al agregar el comentario",
        icon: "error"
      });
    }
  };

  return (
    <div className="max-w-md mx-auto m-10">
      {group && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">{group.name}</h2>
          <p className="text-gray-700 mb-4">{group.description}</p>
          <p className="text-gray-500">Límite de Usuarios: {group.user_limit}</p>
          <p className="text-gray-500">Categoría: {group.category.name}</p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Comentarios</h3>
        <ul className="divide-y divide-gray-200">
          {comments.map((comment) => (
            <li key={comment.id} className="py-2">
              <p className="text-gray-800">{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Agregar un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={handleAddComment}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Agregar Comentario
      </button>
    </div>
  );
};
