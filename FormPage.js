// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function FormPage({ todos, setTodos, editData, setEditData }) {
//   const [text, setText] = useState('');
//   const navigate = useNavigate();


//   useEffect(() => {
//     if (editData !== null) {
//       setText(todos[editData]);
//     }
//   }, [editData, todos]);

//   const submit = (e) => {
//     e.preventDefault();

//     if (editData !== null) {
//       const updated = [...todos];
//       updated[editData] = text;
//       setTodos(updated);
//       setEditData(null);
//     } else {
//       setTodos([...todos, text]);
//     }

//     setText('');
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>{editData !== null ? 'Edit Todo' : 'Add Todo'}</h2>

//       <form onSubmit={submit}>
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <button type="submit">
//           {editData !== null ? 'Update' : 'Add'}
//         </button>

//         <button
//           type="button"
//           onClick={() => {
//             setEditData(null);
//             navigate('/');
//           }}
//           style={{ marginLeft: '5px' }}
//         >
//           Go Back
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FormPage;
// https://github.com/khushi-shah47/React-To-Do-List-Task

// ======================================================================================================
//after changes code //
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage({ todos, setTodos, editData, setEditData }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();
  const inputRef = useRef(null); 
  
  useEffect(() => {
    if (editData !== null) {
      setText(todos[editData]);
    }
  }, [editData, todos]);


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      setError('Add Data First..');
      return;
    }

    if (editData !== null) {
      const updated = [...todos];
      updated[editData] = text;
      setTodos(updated);
      setEditData(null);
    } else {
      setTodos([...todos, text]);
    }

    setText('');
    setError('');
    navigate('/');
  };

  return (
    <div>
      <h2>{editData !== null ? 'Edit Todo' : 'Add Todo'}</h2>

      <form onSubmit={submit}>
        <input
          ref={inputRef} // focus input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">
          {editData !== null ? 'Update' : 'Add'}
        </button>

        <button
          type="button"
          onClick={() => {
            setEditData(null);
            navigate('/');
          }}
          style={{ marginLeft: '5px' }}
        >
          Go Back
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
    </div>
  );
}

export default FormPage;
