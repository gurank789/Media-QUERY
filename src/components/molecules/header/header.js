import React from 'react';
//import './header.css'
import styles from './header.module.css';
//import { ImMenu } from "react-icons/im";
//import { FcGoogle } from "react-icons/fc";




function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>

        <li><a href="#">About</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Video</a></li>
          <li><a href="#">Contact</a></li>
          <button className={styles.login}>Login</button>
        </ul>
      </nav>
      {/* <section className={styles.hero}>
        <h1>Welcome to my website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis commodo, interdum velit vel, tincidunt ante. Donec sed ligula vitae sapien tincidunt pretium.</p>
        <button className={styles.btn}>Learn More</button>
      </section> */}
    </header>
  );
}

  
  
  
 
export default Header;