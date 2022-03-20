import Template from '@templates/Template'
import '@styles/main.css'
import '@styles/vars.scss'

(async function App(){
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();

