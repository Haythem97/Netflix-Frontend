import React, {useEffect, useState} from 'react';
import Input from "../../components/UI/Input/Input";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import LogoImg from "../../../public/netflix.png";
import styles from "./index.module.scss";
import Message from "../../components/UI/Message/Message";


const Index = () => {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            console.log(data);
            if (data.message) {
              return false;
            }
            localStorage.setItem("token", data.token);
            router.push("/");
          })
          .catch((err) => {
            console.log(err);
            setError(true);
            setErrorMessage(err.message);
          });
    }
    return (
     
        <div className={styles.body} >
            <div className={styles.navbar}>
            <img src={LogoImg.src} className={styles.img}/>
            </div>
            <div className={styles.login}>
            <h1 className={styles.login__title}>S'identifier</h1>
            <div className={styles.login__group}></div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <input 
                type="email"
                id="email"
                placeholder="  E-mail ou numéro de téléphone"
                className={styles.login__group__input}
                name="email"
                onChange={(e) => {
                    setUser({...user, email:e.target.value})
                }}
                />
                <input 
                type="password"
                id="password"
                placeholder="  Mot de passe"
                className={styles.login__group__input}
                name="password"
                onChange={(e) => {
                    setUser({...user, password:e.target.value})
                }}
                />
                <br/>
                <input className={styles.login__sign_in} value="S'identifier" type="submit"/>
                {
                  error ? (
                    <Message message={errorMessage} type="error"/>
                )
                : 
                ""  
                }
                
                <div className={styles.login__secondary_cta}>
                    <input className={styles.check} type="checkbox"/>
                 <a className={styles.login__secondary_cta__text} href="#"> Se souvenir de moi</a>
                <a className={styles.login__secondary_cta__text_login_secondary_cta__text_need_help} href="#">Besoin d'aide?</a></div>
                <div>
                    <form  action="">
                        <div>
                            <div>
                            <hr/><button type="submit" autocomplete="off" tabindex="0" data-uia="">
                                <div data-uia="fb-login">
                                    <img className={styles.icon_facebook} src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"/>
                                    <span className={styles.fb}>S'identifier avec Facebook</span>
                                </div></button>
                                </div>
                                </div>
                                </form>   
                                     <div data-uia="login-signup-now">Première visite sur Netflix&nbsp;?   
                                        <a  target="_self" href="/register">  Inscrivez-vous</a>.</div>
                                        <br/>
                                        <h1> <div data-uia="recaptcha-terms-of-use"><p>
                                        <span>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.</span>&nbsp;</p>
                                       
                                    </div> 
                                 </h1>
                                 </div>
            </form>
        </div>
        </div>

    );
}

export default Index;
