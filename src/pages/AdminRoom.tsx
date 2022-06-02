//import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { isConstructorDeclaration } from 'typescript';
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import { Button } from '../components/Button';
import { Questions } from '../components/Questions';
import { RoomCode } from '../components/RoomCode';
//import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
//import { database } from '../services/firebase';
import '../styles/room.scss';





type RoomParams = {
    id: string;
}

export function AdminRoom(){
    //const { user } = useAuth();
    const params = useParams<RoomParams>();
    
    const roomId = params.id!;
    const { title, questions} = useRoom(roomId);
    
    function handleDeleteQuestion(questionId: string){
        confirm('Tem certeza que desaja excluir essa pergunta')
    }


    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} perguntas</span> }
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return(
                            <Questions
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type='button'
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Questions>
                        );
                    })}
                </div>
            </main>
        
        </div>
    );
}