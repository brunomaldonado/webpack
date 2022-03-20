import getData from "./getData";
import loading from '@images/loading.gif';
import Template from '@templates/Template';

const API = process.env.API;

const showData = () => {
  getData(API)
  .then((data) => {
    const request = data.results[0];
    console.log(request)
    loading.src = request.picture.large;

    Template();
  })
  .catch(err => console.log(err))
}

export default showData;