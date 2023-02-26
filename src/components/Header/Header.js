import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  const logout=()=>{
    const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });
  };


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <button onClick={logout}>Signout</button>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
