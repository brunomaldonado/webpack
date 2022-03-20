// import '@style/vars.scss';
// 
const load = document.getElementById('loading_image');

const API = process.env.API;

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    console.log(data)
    // load.src = data.picture.large;
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;