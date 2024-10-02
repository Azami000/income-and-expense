"use client";

import React from "react";

export const Modal = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Add Record</h3>
            <form method="dialog">
              <button className="btn">&times;</button>
            </form>
          </div>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </div>
  );
};
