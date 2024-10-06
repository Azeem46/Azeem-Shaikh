// App.tsx
import React, { useState } from 'react';
import AIIcon from './components/AIIcon';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Debugging log to track the state
  console.log('Modal visibility in App component:', showModal); // This should change when AIIcon is clicked

  return (
    <div>
      {/* AI button click should toggle the modal */}
      <AIIcon onClick={() => {
        console.log('AI Icon clicked inside App component'); // Debugging log for button click
        setShowModal(true); // Set modal to true
      }} />
      
      {/* Render Modal when showModal is true */}
      {showModal && (
        <Modal onClose={() => {
          console.log('Modal closing'); // Debugging log for modal close
          setShowModal(false);
        }} />
      )}
    </div>
  );
};

export default App;
