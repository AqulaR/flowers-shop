import { useState } from "react";
import Modal from "./Modal";
export default function Registration() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-60">
      <button
        className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </button>

      {showModal && <Modal setOpenModal={setShowModal} />}
    </div>
  );
}
