
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
    <section class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Join the Best Study Groups</h2>
            <p class="text-lg mb-8">Collaborate, Learn, and Succeed Together.</p>
            <Link to={"/groups"} class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Explore</Link>
        </div>
    </section>

    <section id="features" class="bg-gray-200 py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div class="text-blue-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V6a1 1 0 10-2 0v1H8a1 1 0 000 2h1v1a1 1 0 102 0v-1h1a1 1 0 000-2h-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Create Groups</h3>
                    <p class="text-gray-600">Easily create your own study groups and invite classmates to join.</p>
                </div>
                <div class="text-center p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div class="text-blue-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 7H7v6h6V7z" />
                            <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H8a1 1 0 01-1-1V7z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Join Groups</h3>
                    <p class="text-gray-600">Browse and join study groups that match your interests and courses.</p>
                </div>
                <div class="text-center p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div class="text-blue-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.25 2A.75.75 0 104.5 8.75 2.75 2.75 0 007.25 11.5h5.5A2.75 2.75 0 0015.5 8.75a.75.75 0 10-1.5 0 1.25 1.25 0 01-1.25 1.25h-5.5A1.25 1.25 0 015.25 8.75zM4.5 12.5a.75.75 0 10-1.5 0 2.75 2.75 0 002.75 2.75h7.5A2.75 2.75 0 0016.5 12.5a.75.75 0 10-1.5 0 1.25 1.25 0 01-1.25 1.25h-7.5A1.25 1.25 0 014.5 12.5z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Collaborate</h3>
                    <p class="text-gray-600">Use collaboration tools to share notes, resources, and study together effectively.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
