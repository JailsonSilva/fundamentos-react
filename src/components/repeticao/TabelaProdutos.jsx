import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {

    const tab = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 == 0 ? 'Impar' : 'Par'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })

    return (
        <div className='TabelaProdutos'>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PRECO</th>
                    </tr>
                </thead>
                <tbody>
                    {tab}
                </tbody>
            </table>
        </div>
    )
}