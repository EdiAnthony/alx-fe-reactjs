function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-8 md:max-w-sm lg:max-w-md mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src="https://via.placeholder.com/150" alt="User" className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">John Anthony</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">Developer at Skytech computer Entreprise. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;