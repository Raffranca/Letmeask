import { ReactNode } from 'react';
import cx from 'classnames';

import '../styles/question.scss';

type QuestionProps = {
    content: string,
    author:{
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean,
    isHighLighted?: boolean
}

export function Questions({
    content, //desestruturação da props 
    author, 
    isAnswered = false,
    isHighLighted = false,
    children,
}: QuestionProps ){
    return(
        /*`question ${isAnswered ? 'answered' : ''} ${isHighLighted ? 'highlighted' : ''} pode ser feito assim
        ou feito com o classnames de react */
        <div 
            className={cx(
                'question',
                { answered: isAnswered },
                { highlighted: isHighLighted && !isAnswered },
            )}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
            
        </div>
    )
}