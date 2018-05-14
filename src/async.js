const fetch = require('node-fetch');

async function getPosts() {
  try {
    const response = await fetch('https://willianjusten.com.br/search.json');
    const data = await response.json();

    return data.map(post => console.log(post.title));
  } catch (err) {
    console.error('Error in fetch posts!!! \n', err);
  }

  return null;
}

getPosts();

// multi promisses with async await

async function getUsers() {
  const jeferson = fetch('https://api.github.com/users/jefersonpassos').then(r => r.json());
  const willian = fetch('https://api.github.com/users/willianjusten').then(r => r.json());

  const promises = await Promise.all([jeferson, willian]);

  console.log(promises);
}

getUsers();
