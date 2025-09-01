import React from 'react';
import styles from './App.module.css';
import poweredImagem from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import {GridItem} from './components/gridItem/index.tsx'

import { levels, calculateImc, Level} from './helpers/imc.ts';

const App = () => {
  const [heightField, setHeightField] = React.useState(0);
  const [weightField, setWeightField] = React.useState(0);
  const [toShow, setToShow] = React.useState<Level | null>(null);

  const handleClickCalculator = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos!");
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
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
        <h1>Calcule seu <strong>IMC</strong></h1>
        <p>O Índice de Massa Corporal (IMC) é uma medida internacionalmente reconhecida que auxilia na avaliação do estado nutricional de uma pessoa, sendo um importante indicador de saúde.</p> 

        <input 
        type="number"
        placeholder="Digite sua altura. Ex: 1.75 (em metros)"
        value={heightField > 0 ? heightField : ''}
        onChange={event => setHeightField(parseFloat(event.target.value))}
        disabled={toShow ? true : false}
        />

        <input 
        type="number"
        placeholder="Digite seu peso. Ex: 80 (em kg)"
        value={weightField > 0 ? weightField : ''}
        onChange={event => setWeightField(parseFloat(event.target.value))}
        disabled={toShow ? true : false}

        />

        <button onClick={handleClickCalculator} disabled={toShow ? true : false} >Calcular</button>
      </div>

       <div className={styles.rightSide}>
        {!toShow &&
          <div className={styles.grid}> 
                {levels.map((item, key) => (
                  <GridItem key={key} item={item} /> 
                ))}
          </div>
        }
        {toShow &&
          <div className={styles.rightBig} onClick={handleBackButton}>
            <div className={styles.rightArrow}>
              <img 
              src={leftArrowImage} 
              alt=""
              width={25}
              ></img>
            </div>
            <GridItem item={toShow} />
          </div>
        }
      </div>
    </div>
  </div>
  )
}

export default App;