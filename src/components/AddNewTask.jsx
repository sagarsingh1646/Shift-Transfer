import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddNewTaskModal(props) {
  const [formData, setFromData] = useState({
    title: "",
    detail: "",
    source: "",
    shiftAssigned: "",
    status: "",
    priorityLevel: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    let taskList = localStorage.getItem("taskList");
    if (typeof taskList === "string") {
      taskList = JSON.parse(taskList);
    }

    if (!taskList) {
      taskList = [];
    }

    const { title, detail, source, shiftAssigned, status, priorityLevel } =
      formData;
    const newTask = {
      title,
      detail,
      source,
      shiftAssigned,
      status,
      priorityLevel,
    };

    taskList.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  function handleChange(e) {
    const {name, value} = e.target;
    if(name === 'title') {
        setFromData({
            ...formData,
            title: value
        })
    } else if(name === 'detail') {
        setFromData({
            ...formData,
            detail: value
        })
    } else if(name === 'source') {
        
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div class="mb-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Title"
              required
              onChange={handleChange}
              value={formData?.title}
            />
          </div>
          <div class="mb-2">
            <label
              for="detail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Details
            </label>
            <textarea
              type="text"
              id="detail"
              name="detail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Details"
              onChange={handleChange}
              value={formData?.detail}
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="source"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Source
            </label>
            <input
              type="text"
              id="Source"
              name="Source"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Source"
              onChange={handleChange}
              value={formData?.source}
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="shift_assigned"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Shift Assigned
            </label>
            <select
              id="shift_assigned"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={formData?.shiftAssigned}
              required
            >
              <option value="">Choose a shift</option>
              <option value="MORNING">Morning</option>
              <option value="AFTERNOON">Afternoon</option>
              <option value="NIGHT">Night</option>
            </select>
          </div>
          <div class="mb-2">
            <label
              for="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={formData?.status}
              required
            >
              <option value="">Choose Status</option>
              <option value="PENDING">Pending</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div class="mb-2">
            <label
              for="priority"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Priority Level
            </label>
            <select
              id="priority"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={formData?.priorityLevel}
              required
            >
              <option value="">Choose Priority</option>
              <option value="HIGH">High</option>
              <option value="MEDIUMN">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AddNewTask = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button onClick={() => setModalShow((modalShowValue) => !modalShowValue)}>
        <img
          src="./src/assets/icons/plus.png"
          alt="plus icon for add new task"
          width={30}
          height={30}
        />
      </button>
      <AddNewTaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddNewTask;
