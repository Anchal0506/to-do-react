// App.js
import React from 'react';

import { Container, Typography } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          React To-Do App
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
