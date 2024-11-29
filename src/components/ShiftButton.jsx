import React from "react";

const ShiftButton = ({shiftName, handleShiftTime}) => {
  return (
    <div class="pb-2 w-20">
      <button onClick={(e)=> handleShiftTime(e, shiftName)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
        {shiftName}
      </button>
    </div>
  );
};

export default ShiftButton;
