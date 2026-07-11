import { useState } from "react";

import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import TaskForm from "../../components/AddTask/TaskForm";
import UpdateButton from "../../components/EditTask/UpdateButton";
import UpdateMessage from "../../components/EditTask/UpdateMessage";

function EditTask() {
  const [title, setTitle] = useState("Database Assignment");
  const [description, setDescription] = useState(
    "Complete ER Diagram and SQL Queries."
  );

  const [course, setCourse] = useState("Database Systems");
  const [customCourse, setCustomCourse] = useState("");

  const [category, setCategory] = useState("Assignment");
  const [customCategory, setCustomCategory] = useState("");

  const [priority, setPriority] = useState("High");
  const [difficulty, setDifficulty] = useState("Medium");

  const [estimatedTime, setEstimatedTime] = useState("2 Hours");

  const [dueDate, setDueDate] = useState("2026-07-20");

  const [status, setStatus] = useState("Pending");

  const [taskType, setTaskType] = useState("Academic");
  const [customTaskType, setCustomTaskType] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log("Task Updated");

      setLoading(false);

      setMessage("✅ Task updated successfully.");

      setMessageType("success");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <DashboardNavbar />

      <section className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-center mb-8">
            Edit Task
          </h1>

          <UpdateMessage
            message={message}
            messageType={messageType}
          />

          <form onSubmit={handleUpdate}>

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

            <UpdateButton loading={loading} />

          </form>

        </div>
      </section>
    </>
  );
}

export default EditTask;