import React from 'react';

import profile from '../../assets/images/icons/user.svg';

import './styles.css';

function Form(){
    return(
        <article className="teacher-item">
        <header>
            {/* <input type="file" id="myfile" name="myfile"> */}
            <img typeof="file" src={profile} alt="Insira sua foto de perfil"/>
            {/* </input> */}
            <p contentEditable="true">Insira seu nome</p>
        </header>
             
             <footer>
            
             <form className="search-teachers" id="page-teacher-list">
                 <main>
               <div className="input-block">
                <label htmlFor="subject">Nome</label>  <br/>
               <input type=" text" id="subject">
               </input>
               </div>  

               <div className="input-block">
                <label htmlFor="week_day">E-mail</label> <br/>
               <input type=" text" id="week_day">
               </input>
               </div>  

               <div className="input-block">
                <label htmlFor="time">Confirmar e-mail</label>  <br/>
               <input type=" text" id="time">
               </input>
               </div>

               <div className="input-block">
                <label htmlFor="time">Número de celular:</label>  <br/>
               <input type=" text" id="time">
               </input>
               </div>

               <div className="input-block">
                <label htmlFor="time">Confirmar e-mail</label>  <br/>
               <input type=" text" id="time">
               </input>
                </div>

                <div className="center">
                <div className="input-block">
               <button type="button">
                                {/* <img src="{whatsappIcon}" alt="whatsapp"/> */}
                                <p> Cadastrar </p>
                </button>
                </div>
                <div className="input-block">
                <button type="button">
                                {/* <img src="{whatsappIcon}" alt="whatsapp"/> */}
                                <p> Já tenho uma com=nta </p>
                </button>
                </div>
                </div>
               
    
                
               </main>
              </form>  
              

                
                 {/* <button type="button">
                     <img src="{whatsappIcon}" alt="whatsapp"/>
                     <p> Entrar em contado </p>
                 </button> */}
             </footer>
    </article>
    
    );


}


export default Form;