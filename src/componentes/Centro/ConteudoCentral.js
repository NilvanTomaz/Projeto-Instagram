import './ConteudoCentral.css';
import Stories from './Stories';

export default function ConteudoCentral () {
    return (
        <div className='ConteudoCentral'>
            <Stories />
            <div className="Feed">
                O Conteúdo do Feed virá aqui
            </div>
        </div>
    )
}