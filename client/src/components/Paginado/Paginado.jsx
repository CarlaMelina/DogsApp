import React from 'react';
import styles from "./Paginado.module.css"
const Paginado = ({dogsPage, dogs, dogPage, currentPage}) => {
    const pageNumbers= [];

    for (let i = 1; i <= Math.ceil(dogs/dogsPage); i++) //divido el total por los que quiero por pagina, redondeando para arriba
    {
        pageNumbers.push(i);
  
    }
    return (
        <div>
            <ul className={styles.page}>
                <button onClick={() => dogPage(currentPage > 1 ? currentPage - 1 : 1)} className={styles.button}>{"<<"}</button>
                {/* te lleva a la pagina anterior siempre y cuando no sea l a primera */}
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <button key={number} onClick={() => dogPage(number)} className={styles.button}>
                            {number}
                        </button>
                    ))}
                    {/* renderiza un button por cada pagina en el array, y en cada uno aplica un  onclick que dispara la funcion que setea la pagina */}

                <button onClick={() => dogPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)} className={styles.button}>{">>"}</button>
                {/* boton hacia la derceha muestra la pagina siguiente siempre y cuando hayan mas paginas para mostrar. */}
            </ul>
        </div>
    );
};

export default Paginado;
