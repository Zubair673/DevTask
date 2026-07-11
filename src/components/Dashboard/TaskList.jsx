import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

function TaskList({

  search,
  priorityFilter,
  statusFilter,

}) {

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState([

    {
      id: 1,
      title: "Database Assignment",
      course: "Database Systems",
      priority: "High",
      status: "Pending",
      dueDate: "20 July 2026",
    },

    {
      id: 2,
      title: "React Portfolio",
      course: "Web Development",
      priority: "Medium",
      status: "Completed",
      dueDate: "18 July 2026",
    },

    {
      id: 3,
      title: "Operating System Quiz",
      course: "Operating Systems",
      priority: "Low",
      status: "Pending",
      dueDate: "22 July 2026",
    },

    {
      id: 4,
      title: "AI Presentation",
      course: "Artificial Intelligence",
      priority: "High",
      status: "In Progress",
      dueDate: "25 July 2026",
    },

  ]);

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.course.toLowerCase().includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus
    );

  });

  const handleDelete = () => {

    const updatedTasks = tasks.filter(
      (task) => task.id !== selectedTask.id
    );

    setTasks(updatedTasks);

    setShowDeleteModal(false);

    setSelectedTask(null);

  };

  if (filteredTasks.length === 0) {

    return (

      <div className="bg-white rounded-xl shadow-lg p-10 mt-8 text-center">

        <h2 className="text-3xl font-bold">
          No Tasks Found
        </h2>

        <p className="text-gray-500 mt-3">
          Try changing the search or filter.
        </p>

      </div>

    );

  }

  return (

    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        {filteredTasks.map((task) => (

          <div
            key={task.id}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="text-2xl font-bold">
              {task.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {task.course}
            </p>

            <div className="mt-5 space-y-2">

              <p>
                <span className="font-semibold">
                  Priority:
                </span>{" "}
                {task.priority}
              </p>

              <p>
                <span className="font-semibold">
                  Status:
                </span>{" "}
                {task.status}
              </p>

              <p>
                <span className="font-semibold">
                  Due:
                </span>{" "}
                {task.dueDate}
              </p>

            </div>

            <div className="flex gap-3 mt-6">

              <Link
                to="/edit-task"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Edit
              </Link>

              <button
                onClick={() => {

                  setSelectedTask(task);

                  setShowDeleteModal(true);

                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition cursor-pointer"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />

    </>
  );

}

export default TaskList;