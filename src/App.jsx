import React from 'react';
import styles from './App.module.css';
import poweredImagem from './assets/powered.png';

const App = () => {
  const [heightField, setHeightField] = React.useState(0);
  const [weightField, setWeightField] = React.useState(0);

  const handleClickCalculator = () => {
    if (heightField && weightField) {
      console.log("Calculando...");
    } else {
      alert("Digite todos os campos!");
    }
  }

  return (
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImagem} alt="Logo" width={180}/>
      </div>
    </header>

    <div className={styles.container}>

      <div className={styles.leftSide}>
        <h1>Calcule seu IMC AGORA!</h1>
        <p>O Índice de Massa Corporal (IMC) é uma medida internacionalmente reconhecida que auxilia na avaliação do estado nutricional de uma pessoa, sendo um importante indicador de saúde.</p> 

        <input 
        type="number"
        placeholder="Digite sua altura. Ex: 1.5 (em metros)"
        value={heightField > 0 ? heightField : ''}
        onChange={event => setHeightField(parseFloat(event.target.value))}
        />

        <input 
        type="number"
        placeholder="Digite seu peso. Ex: 80 (em kg)"
        value={weightField > 0 ? weightField : ''}
        onChange={event => setWeightField(parseFloat(event.target.value))}
        />

        <button onClick={handleClickCalculator}>Calcular</button>
      </div>

       <div className={styles.rightSide}>
        <p>cont 2</p>
      </div>

    </div>
  </div>
  )
}

export default App;