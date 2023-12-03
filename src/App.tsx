import React, {useState} from 'react';

import Resultados from "./components/Resultados";


function App() {

    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    const [lista, setLista] = useState<number[]>([]);


    const buscar = ():void => {
        let numeros:number[] = [];
        for (let i = 0; i < 10; i++) {
            numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        setLista(numeros);
    }


    return (
        <>
            <h1>Cálculo número pares o impares</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                buscar();
            }}>
                <label htmlFor="min">Mínimo</label>
                <input type="number" placeholder={"Mínimo"} value={min}
                       onChange={(e) => setMin(Number(e.target.value))}/>

                <label htmlFor="max">Máximo</label>
                <input type="number" placeholder={"Máximo"} value={max}
                       onChange={(e) => setMax(Number(e.target.value))}/>

                <button type="submit">Buscar</button>
            </form>

            <br/>

            <Resultados lista={lista}/>

        </>
    );
}

export default App;
