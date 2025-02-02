// import '@emoji-picker-element';

// const inputField = document.getElementById('inputField');
// const emojiPicker = document.getElementById('emojiPicker');
// emojiPicker.addEventListener('emoji-click', (event) => {
//     const emoji = event.detail.unicode; // The selected emoji
//     inputField.value += emoji; // Append emoji to the input field
// });
import React, { useState } from 'react';


export default function Footer () {
    function emojiFunction () {document.querySelector('.emojiContainer').classList.toggle('up')}
    // let inputField = document.querySelector('#inputField');
    // console.log(inputField.value);

    const [message, setMessage] = useState(''); // Tracks the input field value
    // Handle input change
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };
    // Determine which icon to show
    const isMessageEmpty = message.trim() === '';
        return (
        <footer>
            <div className='containerMessage'>
                <i className="fa-regular fa-face-smile" id='emojiBTN' onClick={emojiFunction}></i>
                <i className="fa-solid fa-plus"></i>
                <input id='inputField' placeholder="type a message" type="text"  value={message}
                    onChange={handleInputChange}/>
                <i className="fa-solid fa-microphone" style={{ display: isMessageEmpty ? 'block' : 'none'}}></i>
                <i class="fa-solid fa-paper-plane"  style={{ display: isMessageEmpty ? 'none' : 'block' }}></i>
            </div>
            <div className="emojiContainer">
            {/* <emoji-picker id="emojiPicker"></emoji-picker> */}
            </div>
        </footer>
    )
}