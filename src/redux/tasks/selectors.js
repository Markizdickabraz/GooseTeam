export const selectTasks = state => state.tasks.items;

export const selectToDoTasks = state =>
  state.tasks.items.filter(task => task.category === 'to-do');

export const selectInProgressTasks = state =>
  state.tasks.items.filter(task => task.category === 'in-progress');

export const selectDoneTasks = state =>
  state.tasks.items.filter(task => task.category === 'done');

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;
