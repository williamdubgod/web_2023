import React from "react";
import carroImg from '../img/carro.png'

export default function carros() {
    return (
        <>
        <img src={carroImg} alt="imagem carro" />
        <ul>
            <li>Audi</li>
            <li>BMW</li>
            <li>Mercedes</li>
            <li>Volkswagen</li>
            <li>Honda</li>
        </ul>
        </>
    )
}