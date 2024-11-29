import React from "react";

const TaskCard = ({ data }) => {

  console.log("taskcard", data)

  const cardStyles = {
    Low: "border-green-300 bg-green-50",
    Mid: "border-yellow-300 bg-yellow-50",
    High: "border-orange-300 bg-orange-50",
  };

  return (
    <div>
      {data.map((data) => (
        <div key={data.id} class="pb-8">
          <div
            class="max-w-md p-4 bg-white border border-gray-300 rounded-lg shadow-md "
            className={`max-w-md p-4 rounded-lg shadow-md ${
              cardStyles[data.priorityLevel] || "border-gray-300 bg-white"
            }`}
          >
            <h2 class="text-xl font-bold text-gray-800">Task: {data.Title}</h2>
            <p class="mt-2 text-gray-600">
              <strong>Details:</strong> {data.details}
            </p>
            <p class="mt-1 text-gray-600">
              <strong>Source:</strong> SAP
            </p>
            <p class="mt-1 text-gray-600">
              <strong>Shift Assignee:</strong> {data.shiftAssinee}
            </p>
            <p class="mt-1 text-gray-600">
              <strong>Status:</strong>
              <span class="px-2 py-1 text-sm font-medium {{ priorityLevel === 'Low' ? 'text-green-800 bg-green-200' : '' }} text-yellow-800 bg-yellow-200 rounded">
                {data.status}
              </span>
            </p>
            <p class="mt-1 text-gray-600">
              <strong>Priority Level:</strong>
              <span class="px-2 py-1 text-sm font-medium text-red-800 bg-red-200 rounded">
                {data.priorityLevel}
              </span>
            </p>

            <div class="pl-16">
            <button class=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-10">
              Raise Ticket
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
