import React from "react";
import Titlepage from "../../components/UI/Title/TitlePage";
import Modal from "../../components/UI/Modal/Modal";
import MainLayout from '../../components/layouts/MainLayout';
import styles from "./index.module.scss";
import LogoImg from "../../../public/netflix.png";
import Footer from '../../components/footer/Footer';


const Index = () => {
  const closeModal = () => {
    console.log("its closed");
  };
  const validateModal = () => {
    console.log("it's validated");
  };

  return (
    <div>
     
         <div className={styles.navbar}>
            <li className={styles.logo}><img src={LogoImg.src}/></li>
            <li className={styles.buttons}><a href="/login">S'identifier</a></li>
         </div>
    <div className={styles.main}>
        <div className={styles.area}>
        <h1>Films, séries TV et bien <br/> plus en illimité.</h1><br/><br/>
        <h3>Où que vous soyez. Annulez à tout moment.</h3><br/><br/><br/>
        <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre <br/>abonnement.</h3>
    <div className={styles.search}>
      <input type="text" className={styles.box} placeholder="Adresse e-mail"/>
      <span className={styles.try}> <a href="/register/etape1">Commencer</a>  </span>
    </div>
        
    </div>
   
    </div>
    <div className={styles.container1}>
        <div className={styles.text}>
          <h1>Regardez Netflix sur <br/>votre TV.</h1>
            <p>
            Regardez Netflix sur votre Smart TV,<br/> PlayStation, Xbox,
             Chromecast, Apple TV,<br/> lecteurs Blu-ray et bien plus.
            </p>
        </div>
        <div className={styles.image}>
  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
  <video muted autoPlay loop name="media" className={styles.video}>
    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/x-m4v"/>
    </video>

        </div>
      </div>
      <div className={styles.container1}>
          
          <div className={styles.image}>
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png"/>
          </div>
          <div className={styles.text}>
              <h1>Download your shows to watch on the go.
                </h1>
                <p>
                    Save your data and watch all your favorites offline.
                </p>
            </div>
            
        </div>
        <div className={styles.container1}>
            <div className={styles.text}>
              <h1>Watch everywhere.

                </h1>
                <p>
                    Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV without paying more.

                </p>
            </div>
            <div className={styles.image}>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
      <video muted autoPlay loop name="media" className={styles.videoo}>
    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/x-m4v"/>
    </video>
            </div>
          </div>
          <div className={styles.question}>
            <h1>Frequently Asked Questions
              </h1>
              <div className={styles.quest}>
                <div className={styles.textbox}>What is Netflix?</div>
                <i className={styles.las_la_plus}></i>
              </div>
              <div className={styles.quest}>
                  <div className={styles.textbox}>How much does Netflix cost?</div>
                  <i className={styles.las_la_plus}></i>
                </div>             
                <div className={styles.quest}>
                    <div className={styles.textbox}>Where can I watch?</div>
                    <i className={styles.las_la_plus}></i>
                  </div>                 <div className={styles.quest}>
                    <div className={styles.textbox}>How do I cancel?</div>
                    <i className={styles.las_la_plus}></i>
                  </div>               
                  <div className={styles.quest}>
                      <div className={styles.textbox}>What can I watch on Netflix??</div>
                      <i className={styles.las_la_plus}></i>
                    </div>
                    <div className={styles.quest}>
                        <div className={styles.textbox}>What is Netflix?</div>
                        <i className={styles.las_la_plus}></i>                   
                      </div>    
                      <h3 className={styles.h3}>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner  <br/>ou réactiver votre abonnement.
                      </h3>
                      <div className={styles.search}>
                        <input type="text" className={styles.box} placeholder="Adresse e-mail"/>
                        <span className={styles.try}> Commencer  </span>
                      </div>
                      <br/>
                    
                    </div>
                    <div className={styles.container1}>
                      <Footer/>
                    </div>
    
    </div>

  );
};

export default Index;
