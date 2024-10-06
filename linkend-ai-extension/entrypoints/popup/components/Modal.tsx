// Modal.tsx
import React, { useState } from 'react';
import GenerateForm from './GenerateForm';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = (command: string) => {
    setGeneratedText("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
  };

  const handleInsert = () => {
    const input = document.querySelector('.msg-form__contenteditable') as HTMLElement;
    if (input) {
      input.innerText = generatedText;
      onClose(); // Close modal after insertion
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <button onClick={onClose} className="float-right">X</button>
        <h2 className="text-xl font-bold mb-4">Generate AI Reply</h2>
        <GenerateForm onGenerate={handleGenerate} />
        {generatedText && (
          <div className="mt-4">
            <p className="mb-2">{generatedText}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleInsert}
            >
              Insert
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
