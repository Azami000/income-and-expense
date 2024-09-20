"use client";

export const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 w-[200px] rounded-md text-white h-[30px] active:bg-blue-600"
    >
      {text}
    </button>
  );
};
