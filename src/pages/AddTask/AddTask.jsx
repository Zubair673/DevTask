import { useState } from "react";

import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import TaskForm from "../../components/AddTask/TaskForm";
import TaskButton from "../../components/AddTask/TaskButton";
import TaskMessage from "../../components/AddTask/TaskMessage";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [customCourse, setCustomCourse] = useState("");

  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  const [priority, setPriority] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [estimatedTime, setEstimatedTime] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [status, setStatus] = useState("Pending");

  const [taskType, setTaskType] = useState("");
  const [customTaskType, setCustomTaskType] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log({
        title,
        description,
        course,
        customCourse,
        category,
        customCategory,
        priority,
        difficulty,
        estimatedTime,
        dueDate,
        status,
        taskType,
        customTaskType,
      });

      setMessage("✅ Your task has been added successfully.");
      setMessageType("success");

      setTitle("");
      setDescription("");

      setCourse("");
      setCustomCourse("");

      setCategory("");
      setCustomCategory("");

      setPriority("");
      setDifficulty("");

      setEstimatedTime("");

      setDueDate("");

      setStatus("Pending");

      setTaskType("");
      setCustomTaskType("");

      setLoading(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }, 1200);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");

    setCourse("");
    setCustomCourse("");

    setCategory("");
    setCustomCategory("");

    setPriority("");
    setDifficulty("");

    setEstimatedTime("");

    setDueDate("");

    setStatus("Pending");

    setTaskType("");
    setCustomTaskType("");

    setMessage("");
  };

  return (
    <>
      <DashboardNavbar />

      <section className="min-h-screen bg-gray-100 py-10 px-5">

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center mb-8">
            Add New Task
          </h1>

          <TaskMessage
            message={message}
            messageType={messageType}
          />

          <form onSubmit={handleSubmit}>

            <TaskForm
              title={title}
              setTitle={setTitle}

              description={description}
              setDescription={setDescription}

              course={course}
              setCourse={setCourse}

              customCourse={customCourse}
              setCustomCourse={setCustomCourse}

              category={category}
              setCategory={setCategory}

              customCategory={customCategory}
              setCustomCategory={setCustomCategory}

              priority={priority}
              setPriority={setPriority}

              difficulty={difficulty}
              setDifficulty={setDifficulty}

              estimatedTime={estimatedTime}
              setEstimatedTime={setEstimatedTime}

              dueDate={dueDate}
              setDueDate={setDueDate}

              status={status}
              setStatus={setStatus}

              taskType={taskType}
              setTaskType={setTaskType}

              customTaskType={customTaskType}
              setCustomTaskType={setCustomTaskType}
            />

            <div className="flex gap-4 mt-8">

              <TaskButton loading={loading} />

              <button
                type="button"
                onClick={handleReset}
                className="w-full border border-gray-400 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                Reset
              </button>

            </div>

          </form>

        </div>

      </section>
    </>
  );
}

export default AddTask;