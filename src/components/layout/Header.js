export const Header = () => {
  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">StudyGroups</h1>
        <nav>
          <a href="#about" class="mx-2 text-gray-700 hover:text-blue-600">
            Login
          </a>
          <a href="#features" class="mx-2 text-gray-700 hover:text-blue-600">
            Register
          </a>
        </nav>
      </div>
    </header>
  );
};
