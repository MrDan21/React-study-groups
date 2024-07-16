import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const API_URL = 'http://127.0.0.1:8000/api/groups/';

export const EditGroup = () => {
  const id = 1;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [user_limit, setUser_limit] = useState('');
  const [users, setUsers] = useState([1]);

  const editGroup = () => {
      if(name.trim() === ''){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No esta completo el apartado de nombre'
        });
        return;
      };
      if(description.trim() === ''){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No está completo el apartado de descripcion'
        });
        return;
      };
      if(category.trim() === ''){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No está completo el apartado de categoria'
        });
        return;
      };
      if(user_limit.trim() === ''){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No está completo el apartado de limite de usuarios'
        });
        return;
      };

      axios.put('http://127.0.0.1:8000/api/groups/1/',{
        name,
        description,
        category,
        user_limit,
        users
      })
      .then(response => {
        console.log('Item updated successfully:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'EXITO',
          text: 'Se ha realizado el cambio en el grupo correctamente'
        })
      })
      .catch(error => {
        console.log('Error updating successfully:', error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'Ha ocurrido un error durante la ejecución'
        })
      });
  };
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Editar Grupo</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Nombre del Grupo</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Descripcion</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Categoria</label>
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Limite de usuarios</label>
        <input type="number" value={user_limit} onChange={e => setUser_limit(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={editGroup}>Actualizar Grupo</button>
    </div>
  </div>
</section>
    </>
  );
};


