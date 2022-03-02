import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "./Header.module.scss";
import authService from "../../../services/auth.service";
import withAuth from "../../../HOC/withAuth";




const Header = () => {
const [Film, setFilm] = useState({});
const [success, setSuccess] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  authService
    .updateFilm(token, Film)
      .then((data) => {
          console.log(data);
          setSuccess(true);
          setFilm(data.Film);
    })
    .catch((err) => console.log(err));
};

useEffect(() => {    const token = localStorage.getItem("token");
  authService
    .getFilm(token)
    .then((data) => {
      setFilm(data);
    })
    .catch((err) => console.log(err));
}, []);
    return (
      
      <div className={styles.menu}>
              <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" integrity="sha384-3LK/3kTpDE/Pkp8gTNp2gR/2gOiwQ6QaO7Td0zV76UFJVhqLl4Vl3KL1We6q6wR9" crossorigin="anonymous"/>

      <div className={styles.menutext}>
      <li><a href='#'><img className={styles.s} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png "/></a></li>

           <ul>
             <li><Link href="/">Accueil</Link></li>
           <li> <Link href="/Categories/ac">Movies</Link></li>
           <li><Link href="/wishlist">Wishlist</Link></li>
          
               <li><a>Categories</a>
                <ul className={styles.block}>
                <li><a href="/Categories/ac">Action</a></li>
                <li><a href="/Categories/co">Anime</a></li>
                <li><a href="/Categories/aventure">Comedie</a></li>
                <li><a href="/Categories/aventure">Horreur</a></li>
                <li><a href="/Categories/aventure">Musique</a></li>
                </ul>
            </li>
            </ul>
        </div>
        <div className={styles.a}>
        <ul>   
 
        <li><a href=""><svg className={styles.svg_icon} viewBox="0 0 20 20">
							<path fill="none" d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"></path>
						</svg></a></li>
        <li> <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
   <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
</svg></a></li>
       
          <li> <img src="https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaWLZk5CRgMPm8t4FrDUYA3znA_5oOh7rLQNZzP5qfxQdFMpYM8m8WtmSUkMIgLuaA9fSH71nK07TuXWJb6kYVQ.png?r=fdd" alt=""/>  
            <i className="fa fa-caret-down"></i>       
            <ul className={styles.x}>
              <li> <a href="/account/profil"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z" fill="currentColor"></path></svg>  Mon Profil</a></li>
              <li><a href="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z" fill="currentColor"></path></svg>  Centre d'aide</a></li>
              <li><a href="/login">Se déconnecter</a></li>
            </ul>
            </li>
        </ul>
          </div>
          </div>

    );
}

export default Header;
