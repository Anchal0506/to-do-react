// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid } from '@mui/material';
import { addTask } from '../redux/actions';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          label="Enter task"
          variant="outlined"
          value={taskText}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{height: "100%"}}
          onClick={handleSubmit}
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
}

export default TaskInput;
