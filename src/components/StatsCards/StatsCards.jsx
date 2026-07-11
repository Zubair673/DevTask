function StatsCards() {

  // Dummy values
  // Backend ke baad automatically calculate hongi

  const totalTasks = 12;
  const completedTasks = 5;
  const pendingTasks = 7;

  return (

    <div className="grid md:grid-cols-3 gap-6 mt-8">

      <div className="bg-white rounded-xl shadow-lg p-6 text-center">

        <h2 className="text-4xl font-bold text-blue-600">

          {totalTasks}

        </h2>

        <p className="mt-2 text-gray-600">

          Total Tasks

        </p>

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center">

        <h2 className="text-4xl font-bold text-green-600">

          {completedTasks}

        </h2>

        <p className="mt-2 text-gray-600">

          Completed

        </p>

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-500">

          {pendingTasks}

        </h2>

        <p className="mt-2 text-gray-600">

          Pending

        </p>

      </div>

    </div>

  );

}

export default StatsCards;