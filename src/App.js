import axios from 'axios';
import useRequest from './hooks/useRequest'



function App() {

  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

if(loading) {
  return <h1>Идет Загрузка</h1>
}

return (
  <div className="App">
    {todos && todos.map(todo =>
      <div style={{ padding: 30, border: '2px solid black' }}>
        {todo.id}.{todo.title}
      </div>)}
  </div>
);
}

export default App;
