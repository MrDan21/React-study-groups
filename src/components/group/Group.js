import React from 'react'

export const Group = ({group}) => {
    return (
        <div>

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
        </div>
    )
}
