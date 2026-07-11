function UserInfo() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <p className="text-gray-500">Email</p>
          <p className="font-medium">
            example@email.com
          </p>
        </div>

        <div>
          <p className="text-gray-500">University</p>
          <p className="font-medium">
            International Islamic University Islamabad
          </p>
        </div>

        <div>
          <p className="text-gray-500">Semester</p>
          <p className="font-medium">
            5th Semester
          </p>
        </div>

        <div>
          <p className="text-gray-500">Location</p>
          <p className="font-medium">
            Pakistan
          </p>
        </div>

      </div>

    </div>
  );
}

export default UserInfo;