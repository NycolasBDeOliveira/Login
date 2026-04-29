import '../styles/global.css';
import '../styles/About.css';

function About() {
  return (
    <div className='page'>
        <div className='card'>
            <h1 className='title'>Sobre a Dupla</h1>

      <div className='dev-card'>
        <h3>Nycolas Braga de Oliveira</h3>
        <p>Estudo na FAETEC e faço curso de Informática para Internet, interessado em aprender sobre programação.</p>
      </div>

      <div className='dev-card'>
        <h3>Lucas Alexandre Amorim de Araujo</h3>
        <p>Terminando Curso de Informática para internet na FAETEC, e tenho um interesse em aprender novas linguagens de programação.</p>
      </div>
        </div>
    </div>
  );
};

export default About;