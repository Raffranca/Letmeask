/* eslint-disable jsx-a11y/anchor-is-valid */
//import { TestContext } from '../App';

//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
//  import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom(){
    //const value = useContext(TestContext)

    //const { user } = useAuth();

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração perguntas e respostas"/>
                <strong>Crie salas de perguntas e respostas</strong>
                <p>Tire dúvidas em tempo real</p>
            </aside>
            <main>
                {/* <h1>{value}</h1> */}
                <div className='main-content'>
                    <img src={logoImg} alt="logo Letmeask" />
                    
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder='Nome da sala'
                        />
                        <Button type='submit'>
                            Criar sala 
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
            
        </div>
    )
}