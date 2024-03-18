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
        }
    ]

    return(
        <>
            <Header titulo="Habilidades"/> 
            <div className="styleItens">
                <Item titulo='React JS' img={React}/>
                <Item img={Js} titulo='JavaScript'/>
            </div>
        </>
    )
} 

export default Itens;