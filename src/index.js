import Template from '@templates/Template'
import Background from '@templates/Background'
import showData from '@utils/showData'
import '@styles/main.css'
import '@styles/vars.scss'

(async function App(){
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
  const bg = null || document.getElementById('bg');
  bg.innerHTML = await showData();
})();
