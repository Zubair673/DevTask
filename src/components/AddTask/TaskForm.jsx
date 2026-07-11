import { useRef, useEffect } from "react";

function TaskForm({

  title,
  setTitle,

  description,
  setDescription,

  course,
  setCourse,

  customCourse,
  setCustomCourse,

  category,
  setCategory,

  customCategory,
  setCustomCategory,

  priority,
  setPriority,

  difficulty,
  setDifficulty,

  estimatedTime,
  setEstimatedTime,

  dueDate,
  setDueDate,

  status,
  setStatus,

  taskType,
  setTaskType,

  customTaskType,
  setCustomTaskType,

}) {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (

    <>

      {/* Task Title */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Task Title
        </label>

        <input
          ref={inputRef}
          type="text"
          value={title}
          maxLength="100"
          placeholder="Enter task title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <p className="text-right text-sm text-gray-500 mt-1">
          {title.length}/100
        </p>

      </div>

      {/* Description */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Description
        </label>

        <textarea
          rows="4"
          value={description}
          maxLength="300"
          placeholder="Describe your task..."
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <p className="text-right text-sm text-gray-500 mt-1">
          {description.length}/300
        </p>

      </div>

      {/* Course */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Course
        </label>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        >

          <option value="">Select Course</option>

          <option>Software Engineering</option>
          <option>Software Construction</option>
          <option>Requirements Engineering</option>
          <option>Database Systems</option>
          <option>Operating Systems</option>
          <option>Data Structures & Algorithms</option>
          <option>Computer Networks</option>
          <option>Artificial Intelligence</option>
          <option>Web Development</option>
          <option>Cyber Security</option>
          <option>Other</option>

        </select>

      </div>

      {
        course === "Other" && (

          <div className="mb-5">

            <label className="block font-medium mb-2">
              Enter Course Name
            </label>

            <input
              type="text"
              value={customCourse}
              placeholder="Enter course name"
              onChange={(e) => setCustomCourse(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

        )
      }

      {/* Category */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        >

          <option value="">Select Category</option>

          <option>Assignment</option>
          <option>Lab Task</option>
          <option>Quiz</option>
          <option>Presentation</option>
          <option>Semester Project</option>
          <option>Coding Practice</option>
          <option>Research</option>
          <option>Personal Task</option>
          <option>Other</option>

        </select>

      </div>

      {
        category === "Other" && (

          <div className="mb-5">

            <label className="block font-medium mb-2">
              Enter Category
            </label>

            <input
              type="text"
              value={customCategory}
              onChange={(e)=>setCustomCategory(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

        )
      }

      <div className="grid md:grid-cols-2 gap-5">

        <div>

          <label className="block font-medium mb-2">
            Priority
          </label>

          <select
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          >

            <option value="">Select Priority</option>

            <option>High</option>
            <option>Medium</option>
            <option>Low</option>

          </select>

        </div>

        <div>

          <label className="block font-medium mb-2">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e)=>setDifficulty(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          >

            <option value="">Select Difficulty</option>

            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>

          </select>

        </div>

      </div>
            {/* Estimated Time */}

      <div className="mt-5">
        <label className="block font-medium mb-2">
          Estimated Time
        </label>

        <select
          value={estimatedTime}
          onChange={(e) => setEstimatedTime(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Estimated Time</option>

          <option>15 Minutes</option>
          <option>30 Minutes</option>
          <option>45 Minutes</option>
          <option>1 Hour</option>
          <option>2 Hours</option>
          <option>3 Hours</option>
          <option>4 Hours</option>
          <option>5+ Hours</option>
        </select>
      </div>

      {/* Due Date */}

      <div className="mt-5">
        <label className="block font-medium mb-2">
          Due Date
        </label>

        <input
          type="date"
          value={dueDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Status */}

      <div className="mt-5">
        <label className="block font-medium mb-2">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Task Type */}

      <div className="mt-5">
        <label className="block font-medium mb-2">
          Task Type
        </label>

        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Task Type</option>

          <option>Academic</option>
          <option>Personal</option>
          <option>Freelancing</option>
          <option>Internship</option>
          <option>Interview Preparation</option>
          <option>Other</option>
        </select>
      </div>

      {taskType === "Other" && (
        <div className="mt-5">
          <label className="block font-medium mb-2">
            Enter Task Type
          </label>

          <input
            type="text"
            value={customTaskType}
            onChange={(e) => setCustomTaskType(e.target.value)}
            placeholder="Enter task type"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      )}

    </>
  );
}

export default TaskForm;