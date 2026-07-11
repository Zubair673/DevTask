function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">

      <img
        src="https://i.pravatar.cc/200"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
      />

      <h2 className="text-3xl font-bold mt-5">
        Muhammad Zubair Rauf
      </h2>

      <p className="text-gray-600 mt-2">
        Software Engineering Student
      </p>

      <p className="text-blue-600 font-medium mt-1">
        Frontend Developer
      </p>

    </div>
  );
}

export default ProfileCard;