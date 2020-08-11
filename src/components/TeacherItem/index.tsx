import React from 'react';
import TeacherList from '../../pages/TeachersList';

// imagem
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import nauj from '../../assets/images/nauj.jpeg'

import './styles.css'

function TeacherItem(){
    return(
    <article className="teacher-item">
                   <header>
                       <img src="https://avatars0.githubusercontent.com/u/66383740?s=400&u=3c8d871f37a7f29f2d3fdd3de7f67ab03d807a02&v=4" alt="Juan Andrade"/>
                        <div className="">
                            <strong>
                                Iza

                                 <span>Html </span>
                                </strong>
                        </div>
                   </header>
                        <p>Designer grafico
                            <br/> <br/>
                           texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                        </p>

                        <footer>
                            <p>Preço por Hora
                                <strong>R$ 2,50</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                <p> Entrar em contado </p>
                            </button>
                        </footer>
               </article>
    );
}

export default TeacherItem;