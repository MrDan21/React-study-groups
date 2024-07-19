import React from 'react'

export const Login = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
        <form action="#" method="POST">
            <div class="mb-4">
                <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                <input type="text" id="username" name="username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" required />
            </div>
            <div class="mb-4">
                <input type="checkbox" id="remember-me" name="remember-me" class="mr-2 leading-tight" />
                <label for="remember-me" class="text-gray-700">Remember me</label>
            </div>
            <button type="submit" class="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50">Login</button>
        </form>
        <p class="text-gray-600 text-center mt-6">Don't have an account? <a href="#" class="text-indigo-500 font-semibold">Sign up</a></p>
      </div>
    </div>
  )
}
