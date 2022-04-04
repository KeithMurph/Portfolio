import React from 'react'

export default function Footer(){
    return (
        <footer  expand="md" className= "row footer  fixed-bottom">
        
        <a class="col"  href="https://github.com/KeithMurph" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/></a>
        <a class="col" href="https://www.linkedin.com/in/keithmurph/" target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/></a>
        <a class="col" href="mailto: keithmurphy.dev@gmail.com" target="_blank" rel="noreferrer"  ><img src="https://img.icons8.com/ios-glyphs/60/000000/email.png" alt="email"/></a>
        
        </footer>
    );
}