import React from "react"

export default function(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
            <p>
                <strong>{props.titulo}</strong>
                <strong>{ props.aluno }</strong> 
                tem nota 
                <strong> { props.nota } </strong>
                e foi 
                <strong> { status } </strong>
            </p>
        </div>
    )
}