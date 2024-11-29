import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import ShiftButton from "../components/ShiftButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashBoard = () => {
  const [filteredShiftTask, setFilteredShiftTask] = useState([]);
  const [date, setDate] = useState("");

  const data = [
    {
      id: 1,
      Title: "Task1",
      details: "This is task one",
      source: "SAP",
      shiftAssinee: "Sagar Singh",
      status: "In-process",
      priorityLevel: "High",
      shift: "Morning",
      date: "2024-11-29",
    },
    {
      id: 2,
      Title: "Task2",
      details: "This is task two",
      source: "SAP",
      shiftAssinee: "Amit Singh",
      status: "Not-Started",
      priorityLevel: "Mid",
      shift: "Afternoon",
      date: "2024-11-28",
    },
    {
      id: 3,
      Title: "Task2",
      details: "This is task two",
      source: "SAP",
      shiftAssinee: "Amit Singh",
      status: "Completed",
      priorityLevel: "Low",
      shift: "Night",
      date: "2024-11-29",
    },
    {
      id: 4,
      Title: "Task2",
      details: "This is task two",
      source: "SAP",
      shiftAssinee: "Amit Singh",
      status: "Completed",
      priorityLevel: "Low",
      shift: "Morning",
      date: "2024-11-29",
    },
  ];

  useEffect(() => {
    const filteredData = data.filter(
      (data) => data.shift.toLowerCase() === "morning"
    );
    setFilteredShiftTask(filteredData);
  }, []);

  const handleShiftTime = (e, shiftName) => {
    console.log("buttonClicked", shiftName);
    const filteredData = data.filter(
      (data) => data.shift.toLowerCase() === shiftName.toLowerCase()
    );

    // setFilteredShiftTask(...filteredShiftTask, filteredData)
    setFilteredShiftTask(filteredData);
    console.log(filteredData);
    console.log("shiftData", filteredShiftTask);
  };

  const handleDateChange = (selectedDate) => {
    const dateString = selectedDate.toISOString().split("T")[0]; 
    setDate(dateString);
    console.log("Selected Date: ", dateString);
    const filteredData = data.filter((task) => task.date === selectedDate);
    setFilteredShiftTask(filteredData)
  };

  useEffect(()=> {
    
    const today = new Date(); 
    const todayString = today.toISOString().split('T')[0];

    const filteredData = data.filter((task) => task.date === todayString);
    setFilteredShiftTask(filteredData)

    setDate(todayString)


  },[date])

  return (
    <div>
      <div id="Container" class="flex relative">
        <div id="ShiftButton">
          <div>
            <ShiftButton
              shiftName={"Morning"}
              handleShiftTime={handleShiftTime}
            />
            <ShiftButton
              shiftName={"Afternoon"}
              handleShiftTime={handleShiftTime}
            />
            <ShiftButton
              shiftName={"Night"}
              handleShiftTime={handleShiftTime}
            />
          </div>
        </div>
        <div id="Calendar " className="absolute right-0 top-0 pr-20">
          <DatePicker
            selected={date ? new Date(date) : null}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
            className="border p-2 rounded-md"
          />
        </div>
      </div>
      <div id="CardSection">
        <div className="flex ml-40 mr-40 p-2 space-x-10">
          <div
            id="highPriority"
            className="flex-1 max-h-[30rem] overflow-y-auto border border-orange-300 rounded-lg p-4 bg-orange-50"
          >
            <div className="text-lg font-bold text-red-800 text-center">
              high Priority
            </div>
            <TaskCard data={filteredShiftTask} />
          </div>
          <div
            id="midPriority"
            className="flex-1 max-h-[30rem] overflow-y-auto border border-yellow-300 rounded-lg p-4 bg-yellow-50"
          >
            <div className="text-lg font-bold text-yellow-800 text-center">
              Medium Priority
            </div>

            <TaskCard data={filteredShiftTask} />
          </div>
          <div
            id="lowPriority"
            className="flex-1 max-h-[30rem] overflow-y-auto border border-green-300 rounded-lg p-4 bg-green-50"
          >
            <div className="text-lg font-bold text-green-800 text-center">
              Low Priority
            </div>

            <TaskCard data={filteredShiftTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
