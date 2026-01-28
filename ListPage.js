import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListPage({ todos, setTodos, setEditData }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Todo List</h2>

      <button onClick={() => navigate('/form')}>
        Add Todo
      </button>

      {todos.length === 0 ? (
        <p>No data</p>
      ) : (
        <table border="1" style={{ marginTop: '10px' }}>
          <tbody>
            <tr>
              <th>Todo</th>
              <th>Actions</th>
            </tr>

            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>
                  <button
                    onClick={() => {
                      setEditData(index);
                      navigate('/form');
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      const updated = todos.filter((_, i) => i !== index);
                      setTodos(updated);
                    }}
                    style={{ marginLeft: '5px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListPage;
