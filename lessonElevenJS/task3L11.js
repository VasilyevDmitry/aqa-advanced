async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error('Error fetching todo:', error);
  }
}
async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

(async function() {
  try {
    const results = await Promise.all([fetchTodo(), fetchUser()]);
    const [todo, user] = results;
    console.log('Promise.all results:');
    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Promise.all error:', error);
  }

  try {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race result:', result);
  } catch (error) {
    console.error('Promise.race error:', error);
  }
})();
