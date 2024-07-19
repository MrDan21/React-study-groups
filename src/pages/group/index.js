import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'; 
import { useNavigate } from "react-router-dom";


export const GroupIndex = () => {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Ingles",
      description:
        "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo",
      category: "Idiomas",
    },
    {
      id: 2,
      name: "Ingles II",
      description:
        "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo",
      category: "Idiomas",
    },
  ]);

  const handleDeleteGroup = (id) => {
    axios.delete(`http://localhost:8000/api/groups/${id}/`)
      .then((response) => {
        if (response.status === 204) { 
          const updatedGroups = groups.filter((group) => group.id !== id);
          setGroups(updatedGroups);
          Swal.fire({
            title: "Deleted!",
            text: "The group has been deleted.",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the group.",
            icon: "error"
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting group:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the group. Please try again later.",
          icon: "error"
        });
      });
  };
  const navigate = useNavigate();
  
  const handleNewGroupClick = () => {
    navigate("/groups/create"); 
  };

  return (
    <>
      <div className="text-center mt-8">
        <button
          onClick={handleNewGroupClick}
          className="inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:bg-blue-600 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition ease-in-out duration-150"
        >
          New Group
        </button>
      </div>


      <section className="text-gray-600 body-font">
        <div className="container p-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {groups.map((group) => (
              <div key={group.id} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{group.category}</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{group.name}</h1>
                  <p className="leading-relaxed mb-3">{group.description}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleDeleteGroup(group.id)}
                      className="text-red-500 inline-flex items-center mr-4 "
                    >
                      DELETE
                    </button>
                    <a className="text-indigo-500 inline-flex items-center mr-4">
                      SHOW
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
