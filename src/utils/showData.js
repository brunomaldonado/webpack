// const API = 'https://randomuser.me/api/?gender=female';
const API = 'https://randomuser.me/api/?results=500';

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    // console.log(data)
    // console.log(data.results[0])

    let users = '';
    data.results.forEach(user => {
      // console.log(user.name);
      users += 
      `
        <img class="" src="${user.picture.large}" alt="">
      `;
      document.getElementById('bg').innerHTML = users;
    })

    return users;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;