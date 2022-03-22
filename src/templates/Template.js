// import getData from '@utils/getData.js';
import getData from '@utils/getData.js';
import twitter from '@images/twitter.png';
import github from '@images/github.png';
import instagram from '@images/instagram.png';

const Template = async () => {
  const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${data.picture.large}" alt="${data.name.first}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
            <img class="overlay_image" src="${data.picture.large}" alt="">
          </div>
          <p class="card_title">Hi, My name is</p>
          <p class="card_value">${data.name.first} ${data.name.last}</p>
        </div>
        <div class="card_userdata">
          <span>${data.email}</span>
          <span>${data.location.country}</span>
        </div>
        <div class="card_social">
          <a href="#">
            <img src="${twitter}" />
          </a>
          <a href="https://github.com/brunomaldonado" target="_blank">
            <img src="${github}" />
          </a>
          <a href="#">
            <img src="${instagram}" />
          </a>
        </div>
        <img class="overlay_image" src="${data.picture.large}" alt="">
      </div>
    </div>
  `;
  return view;
};

export default Template;