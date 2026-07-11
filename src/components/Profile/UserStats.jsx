function UserStats() {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-6">

      <div className="bg-white rounded-xl shadow-lg p-6 text-center">

        <h2 className="text-3xl font-bold text-blue-600">
          15
        </h2>

        <p className="mt-2 text-gray-600">
          Completed Tasks
        </p>

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center">

        <h2 className="text-3xl font-bold text-yellow-500">
          6
        </h2>

        <p className="mt-2 text-gray-600">
          Pending Tasks
        </p>

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center">

        <h2 className="text-3xl font-bold text-green-600">
          5
        </h2>

        <p className="mt-2 text-gray-600">
          Projects
        </p>

      </div>

    </div>
  );
}

export default UserStats;