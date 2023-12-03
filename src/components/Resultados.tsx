import React, {memo} from "react";

const Resultados = (props: { lista: number[] }) => {

    const esPar = (numero: number) => {
        if (numero % 2 === 0) return "Sí";
        return "No";
    }

    return (
        <>
            <table border={1}>
                <thead>
                <tr>
                    <th>Número</th>
                    <th>es Par?</th>
                </tr>
                </thead>
                <tbody>
                {props.lista.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item}</td>
                            <td>{esPar(item)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

//export default memo(Resultados);
export default Resultados;