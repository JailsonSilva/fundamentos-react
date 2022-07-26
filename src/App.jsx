import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/contador/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Primiero from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#13 - Mega" color="#AB2DDA">
                    <Mega qtde={7}></Mega>
                </Card>

                <Card titulo="#12 - Contador" color="#2DD2DA">
                    <Contador numeroInicial={100}></Contador>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color="#2D71DA">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#DA2D35">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#DA2D6F">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#7BB626">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando'}}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#7EA22D">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição" color="#A27D2D">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Componente com Familia" color="#6B2DA2">
                    <Familia sobrenome=" Ferreira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#080">
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#03 - Fragmento" color="#3944DF">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#F1D12E">
                    <ComParametro
                        titulo='Situação do aluno '
                        aluno=' Pedro ' nota={9.3} />
                </Card>

                <Card titulo="#01 - Primeiro" color="#2EEAf9">
                    <Primiero />
                </Card>

            </div>
            
        </div>
    );
}