import { useState } from 'react';

import './Post.css';

import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { IoFlagSharp } from "react-icons/io5";





// var likes = 0;
// function setLikes (valor){
//     likes = valor;
// }

var color;

export default function Post(props) {

    const [likes, setLikes] = useState(0);

    if (likes == 0) {
        color = "black";
    } else {
        color = "red";
    }


    return (
        <div className="card Post">
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />

                <div className='card-icons'>
                <FaHeart
                    onClick={() => setLikes(likes + 1)}
                    style={{
                        color: likes % 2 === 0 ? 'black' : 'red',
                        cursor: 'pointer',
                        
                        
                    }}
                />
                <FiMessageCircle  />

                <IoMdShareAlt />

                </div>

                <div className='card-flag' >
                <IoFlagSharp />
                </div>
                
                <p>{props.body}</p>
            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}