import React, { useState } from 'react';

interface GenerateFormProps {
  onGenerate: (command: string) => void;
}

const GenerateForm: React.FC<GenerateFormProps> = ({ onGenerate }) => {
  const [command, setCommand] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(command);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="w-full border rounded px-2 py-1 mb-2"
        placeholder="Enter your command"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate
      </button>
    </form>
  );
};

export default GenerateForm;