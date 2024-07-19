import { useState, useEffect } from "react";

export const GroupsIndex = () => {
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
        setTotalPages(Math.ceil(data.count / 10)); // Asumiendo 10 items por página
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
              <div className="p-4 lg:w-1/3" key={group.id}>
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {group.category.name}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {group.name}
                  </h1>
                  <p className="leading-relaxed mb-3">{group.description}</p>
                  <p className="leading-relaxed mb-3">
                    <strong>Created At:</strong>{" "}
                    {new Date(group.created_at).toLocaleDateString()}
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong>Updated At:</strong>{" "}
                    {new Date(group.updated_at).toLocaleDateString()}
                  </p>
                  <a className="text-indigo-500 inline-flex items-center">
                    SHOW
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
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
