  import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

export default defineContentScript({
  matches: ['https://www.linkedin.com/'],
  main() {
    console.log('Hello LinkedIn!');
const createAppContainer = () => {
  const container = document.createElement('div');
  container.id = 'linkedin-ai-reply-extension';
  document.body.appendChild(container);
  return container;
};

const renderApp = () => {
  const container = createAppContainer();
  ReactDOM.render(React.createElement(App), container);
};

const handleInputFocus = (event: FocusEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('msg-form__contenteditable')) {
    renderApp();
  }
};

const handleInputBlur = (event: FocusEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('msg-form__contenteditable')) {
    const container = document.getElementById('linkedin-ai-reply-extension');
    if (container) {
      ReactDOM.unmountComponentAtNode(container);
      container.remove();
    }
  }
};

document.addEventListener('focus', handleInputFocus, true);
document.addEventListener('blur', handleInputBlur, true);
  },
});