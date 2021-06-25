import logo from './assets/images/logo.png';
import logo2 from './assets/images/logo2.png';
import './assets/fonts/fonts.css';
import './assets/styles/style.css';

function App() {
  return ( 
    
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d79430" fillOpacity="1" d="M0,128L80,122.7C160,117,320,107,480,122.7C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>



    <div className="container">
      <img src={logo} alt="logo" className="image1"></img>

      <div className="container-row">
        <img src={logo2} alt="logo2" className="image2"></img>

      <div className="texte">
        <h1>Cette partie du site est en cours de maintenance !</h1>

        <p>
          La page que vous recherchez est en cours de maintenance, nous vous suggérons de revenir dans quelque temps.
          Vous pouvez revenir à la page d'accueil.
        </p> 

        <div className="bouton">
          <p>
            <a href="https://www.colibree.fr/">Accueil</a>
          </p>
        </div>

        </div>
      </div>
    </div>
    </>

  );
}

export default App;
