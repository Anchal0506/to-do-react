import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion, AnimatePresence } from 'framer-motion';
import './TaskList.css'; // Import CSS file for styles

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8}>
        <List className="task-list-container">
          <AnimatePresence>
            {tasks.map(task => (
              <motion.li
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ListItem>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                  />
                  <ListItemText primary={task.text} className="task-text" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)} className="delete-button">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </motion.li>
            ))}
          </AnimatePresence>
        </List>
      </Grid>
    </Grid>
  );
}

export default TaskList;
