import React from 'react'

export default function Footer(){
    return (
        <footer  className= "row footer bg-info fixed-bottom">
        
        <a class="col-md-4"  href="https://github.com/KeithMurph" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/></a>
        <a class="col-md-4" href="https://www.linkedin.com/in/keithmurph/" target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/></a>
        <a class="col-md-4" href="mailto: keithmurphy94@gmail.com" target="_blank" rel="noreferrer"  ><img src="https://img.icons8.com/ios-glyphs/60/000000/email.png" alt="email"/></a>
        
        </footer>
    );
}