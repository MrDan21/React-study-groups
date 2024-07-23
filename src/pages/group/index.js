import { useState, useEffect } from "react";
import { Group } from "../../components/group/Group";

export const GroupIndex = () => {
  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGroups = async (page) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/groups/?page=${page}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGroups(data.results);
        setTotalPages(Math.ceil(data.count / 3));
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container p-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {groups.map((group) => (

              <Group group={group}/>
             
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
