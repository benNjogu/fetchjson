import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  console.log(res.data);
});

//-> { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
