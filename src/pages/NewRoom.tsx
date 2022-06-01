/* eslint-disable jsx-a11y/anchor-is-valid */
//import { TestContext } from '../App';

//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom(){
    //const value = useContext(TestContext)
    const { user } = useAuth();
    const history = useNavigate();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })
        
        history(`/rooms/${firebaseRoom.key}`);
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
                    
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type="text" 
                        placeholder='Nome da sala'
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
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