import React from 'react';
import './Kate.css';

const Kate = () => {
    return (
        <div class="body">
            <h1>Kate's Profile</h1><br></br>
            <div class="header">
                <img scr="/Members/AVATAR-GUIL.png" alt='GUIL'class ="avatar" ></img>
                <div class="info">
                    <h1>Guillani calais</h1>
                    <p>front Developer, Designer</p>
                    <a href='guilcalais@gmail.com'>Guillanicalais@gmail.com</a>
                </div>
            </div><br></br>

            <div class="buttons">
                <button><img src="BUTTON-1.png"></img></button>
                <button><img src="BUTTON-2.png"></img></button>
                <button><img src="BUTTON-3.png"></img></button>
                <button><img src="BUTTON-4.png"></img></button>
            </div>

            <div class="skills">
                <div><img src="HTML.png" alt="HTML"></img></div>
                <div><img src="CSS.png" alt="CSS"></img></div>
                <div><img src="JavaScript.png" alt="JavaScript"></img></div>
                <div><img src="MySQL.png" alt="MySQL"></img></div>
                <div><img src="BLENDER.png" alt="Blender"></img></div>
                <div><img src="FIGMA.png" alt="Figma"></img></div>
                <div><img src="PINTEREST.png" alt="Pinterest"></img></div>
            </div>
        </div>
    );
};

export default Kate;
