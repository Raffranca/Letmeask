//import { TestContext } from '../App';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';
//import { auth, firebase } from '../services/firebase'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';


import '../styles/auth.scss';


export function Home(){

    const history = useNavigate();
   // const { value, setValue } = useContext(TestContext);
    const { user,signInWithGoogle } = useAuth()
    
    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
        history('/rooms/new')
    }



    
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
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="Logo Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>               
                    <form>
                        <input 
                        type="text" 
                        placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar  na sala
                        </Button>
                    </form>
                </div>
            </main>
            
        </div>
    )
}