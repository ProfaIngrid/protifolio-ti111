import Header from "./Header";
import React from '../images/react.png';
import Js from '../images/js.png';
import Css from '../images/css.png';
import Html from '../images/html.png';
import Sql from '../images/sql.png';
import Node from '../images/node.png';
import Item from "./Item";

const Itens = () => {
    const linguagens = [
        {
            titulo: 'React JS',
            img: React
        },{
            titulo: 'JavaScript',
            img: Js
        },{
            titulo: 'CSS 3',
            img: Css
        },{
            titulo: 'HTML 5',
            img: Html
        },{
            titulo: 'DB Relacional',
            img: Sql
        },{
            titulo: 'NodeJS',
            img: Node
        }
    ]

    return(
        <>
            <Header titulo="Habilidades"/> 
            <div className="styleItens">
                {
                   linguagens.map((linguagem) =>{
                        return(
                            <Item titulo={linguagem.titulo} img={linguagem.img}/>
                        ) 
                   }) 
                }
            </div>
        </>
    )
} 

export default Itens;