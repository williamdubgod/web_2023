import React from "react"

export default function ListaCarros(props) {
    return (
        <>
        <div>
            <ul>
                <li>{props.marcas[0]}</li>
                <li>{props.marcas[1]}</li>
                <li>{props.marcas[2]}</li>
            </ul>
        </div>
        </>
    )
}