//React-js Task 
// 1.to -do list with 2 pages one lis todo list nd 2nd is form page 
// -in list page when no data is added it shows no data
// -in form page when data is added it shows data in list page with table Format
// -in list page when data is edited it shows inn form page 
//-when open form page focus on input field
//-when no data is entered cant show table data

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './ListPage';
import FormPage from './FormPage';

function App() {
  const [todos, setTodos] = useState([]);
  const [editData, setEditData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ListPage
              todos={todos}
              setTodos={setTodos}
              setEditData={setEditData}
            />
          }
        />
        <Route
          path="/form"
          element={
            <FormPage
              todos={todos}
              setTodos={setTodos}
              editData={editData}
              setEditData={setEditData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
