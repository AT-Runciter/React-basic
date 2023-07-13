import React from 'react';
import ReactDOM from 'react-dom';

//JSX
const jsxElement = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Title'),
  React.createElement('p', null, 'Text paragraph'),
  React.createElement('img', { src: '/images/n.jpg', alt: '' })
);

//createElement
function createElementElement() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Title'),
    React.createElement('p', null, 'Text paragraph'),
    React.createElement('img', { src: '/images/n.jpg', alt: '' })
  );
}

//Завдання з формами
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);
}

function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ім'я:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <button type="submit">Надіслати</button>
    </form>
  );
}

ReactDOM.render(
  <>
    {jsxElement}
    {createElementElement()}
    <Form />
  </>,
  document.getElementById('root')
);
