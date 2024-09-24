"use client";

export const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 w-[3700px] rounded-3xl text-white h-[40px] active:bg-blue-600"
    >
      {text}
    </button>
  );
};
