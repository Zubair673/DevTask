import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import API from "../../api/api";
import DeleteModal from "../DeleteModal/DeleteModal";

function TaskList({ search, priorityFilter, statusFilter }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      case "Low": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700";
      case "Pending": return "bg-yellow-100 text-yellow-700";
      case "In Progress": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getDueDateColor = (date) => {
    if (!date) return "text-gray-500";
    const today = new Date();
    const due = new Date(date);
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    if (due < today) return "text-red-600 font-semibold";
    if (due.getTime() === today.getTime()) return "text-orange-600 font-semibold";
    return "text-green-600 font-semibold";
  };

  const getResources = (task) => {
    const text = `${task.title} ${task.course}`.toLowerCase();
    if (text.includes("react")) return { docs: "https://react.dev", video: "https://www.youtube.com/results?search_query=react+tutorial", practice: "https://react.dev/learn" };
    if (text.includes("javascript") || text.includes("js")) return { docs: "https://javascript.info", video: "https://www.youtube.com/results?search_query=javascript+tutorial", practice: "https://www.codewars.com" };
    if (text.includes("html")) return { docs: "https://developer.mozilla.org/en-US/docs/Web/HTML", video: "https://www.youtube.com/results?search_query=html+tutorial", practice: "https://www.frontendmentor.io" };
    if (text.includes("css")) return { docs: "https://developer.mozilla.org/en-US/docs/Web/CSS", video: "https://www.youtube.com/results?search_query=css+tutorial", practice: "https://cssbattle.dev" };
    if (text.includes("mongodb")) return { docs: "https://www.mongodb.com/docs/", video: "https://www.youtube.com/results?search_query=mongodb+tutorial", practice: "https://www.mongodb.com/products/platform/atlas" };
    if (text.includes("database") || text.includes("sql")) return { docs: "https://sqlbolt.com", video: "https://www.youtube.com/results?search_query=sql+tutorial", practice: "https://sqlbolt.com" };
    if (text.includes("ai") || text.includes("artificial")) return { docs: "https://www.kaggle.com/learn", video: "https://www.youtube.com/results?search_query=artificial+intelligence+tutorial", practice: "https://www.kaggle.com" };
    
    return { docs: "https://developer.mozilla.org/", video: "https://www.youtube.com", practice: "https://www.frontendmentor.io" };
  };

  const fetchTasks = async () => {
    try {
      const { data } = await API.get("/tasks");
      setTasks(data.tasks);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const s = search.toLowerCase();
    const matchesSearch = task.title?.toLowerCase().includes(s) || task.description?.toLowerCase().includes(s) || task.course?.toLowerCase().includes(s);
    const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter;
    const matchesStatus = statusFilter === "All" || task.status === statusFilter;
    return matchesSearch && matchesPriority && matchesStatus;
  });

  const handleDelete = async () => {
    try {
      await API.delete(`/tasks/${selectedTask._id}`);
      toast.success("Task Deleted Successfully");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete task");
    }
    setShowDeleteModal(false);
    setSelectedTask(null);
  };

  if (loading) return <div className="bg-white rounded-xl shadow-lg p-10 mt-8 text-center"><h2 className="text-3xl font-bold">Loading Tasks...</h2></div>;

  if (filteredTasks.length === 0) return (
    <div className="bg-white rounded-xl shadow-lg p-10 mt-8 text-center">
      <h2 className="text-3xl font-bold">No Tasks Found</h2>
      <p className="text-gray-500 mt-3">Try changing the search or filter.</p>
    </div>
  );

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredTasks.map((task) => {
          const res = getResources(task);
          return (
            <div key={task._id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl font-bold">{task.title}</h2>
              <p className="text-gray-600 mt-2">{task.description}</p>
              
              <div className="mt-5 space-y-3">
                <p><span className="font-semibold">📚 Course:</span> {task.course || "N/A"}</p>
                <p><span className="font-semibold">🏷 Category:</span> {task.category || "N/A"}</p>
                <p><span className="font-semibold">🔥 Priority:</span> <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span></p>
                <p><span className="font-semibold">📌 Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>{task.status}</span></p>
                <p><span className="font-semibold">💪 Difficulty:</span> {task.difficulty || "N/A"}</p>
                <p><span className="font-semibold">⏰ Estimated Time:</span> {task.estimatedTime || "N/A"}</p>
                <p><span className="font-semibold">📅 Due Date:</span> <span className={getDueDateColor(task.dueDate)}>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "N/A"}</span></p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6">
                <a href={res.docs} target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-lg text-sm transition">📖 Docs</a>
                <a href={res.video} target="_blank" rel="noreferrer" className="bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-lg text-sm transition">🎥 Video</a>
                <a href={res.practice} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg text-sm transition">💻 Practice</a>
              </div>

              <div className="flex gap-3 mt-6">
                <Link to={`/edit-task/${task._id}`} className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">Edit</Link>
                <button onClick={() => { setSelectedTask(task); setShowDeleteModal(true); }} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition cursor-pointer">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <DeleteModal isOpen={showDeleteModal} onClose={() => { setShowDeleteModal(false); setSelectedTask(null); }} onDelete={handleDelete} />
    </>
  );
}

export default TaskList;