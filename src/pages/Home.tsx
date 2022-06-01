//import { TestContext } from '../App';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';
//import { auth, firebase } from '../services/firebase'
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import { database } from '../services/firebase';


import '../styles/auth.scss';


export function Home(){

    const history = useNavigate();
   // const { value, setValue } = useContext(TestContext);
    const { user,signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('');
    
    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
        history('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if(roomCode.trim() == ''){
            return; 
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get(); 
        if(!roomRef.exists()){
            alert('Sala não existe, verifique o codígo')
            return;
        }

        history(`rooms/${roomCode}`);
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
                    <form onSubmit={handleJoinRoom}>
                        <input 
                        type="text" 
                        placeholder='Digite o código da sala'
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
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