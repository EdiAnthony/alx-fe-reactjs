function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-8 md:max-w-sm lg:max-w-md mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4">John Anthony</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">Developer at Skytech Computer Enterprise. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;