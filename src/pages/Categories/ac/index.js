import React, {useEffect, useState} from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { useQuery } from "@apollo/react-hooks";
import styles from "./index.module.scss";
import AllFilms from '../../components/Film/All/AllFilms';
import { getFilms } from "../../graphql/queries/Films";





const Index = (props) => {
  
  const { loading, error, data } = useQuery(getFilms);
    
  if (loading) {
      return "loading...";
  }

  if (error) {
      console.log(error);
      return null;
  }

    return (

        <MainLayout>

    <section className={styles.main_container}>
		<div className={styles.l_hero}>
			<div className={styles.l_hero__text}>
				<h1 className={styles.c_title}>
          <img className={styles.t} src="https://upload.wikimedia.org/wikipedia/fr/0/05/Super-h%C3%A9ros_malgr%C3%A9_lui.png"/>
					<span className={styles.c_title__category}><strong>Netflix </strong> Original</span>
					<span className={styles.c_title__name}> Viewport <br/>Units</span>
				</h1>
			
				<div className={styles.l_hero__buttons}>
        <button className={styles.play}><i className="fa fa-play"></i>  Lecture </button>
    <button className={styles.add}>&#9432;   Plus d'infos </button>
				</div>
			</div>
		</div>
    <div className={styles.d}>
    <video autoPlay loop preload muted className={styles.video}>
      <source src="https://fr.vid.web.acsta.net/nmedia/33/22/01/10/18/19590109_hd_013.mp4" type="video/mp4"/>
      </video>
      <img src="../../public/00.jpg"/> 
      </div>
    <div className={styles.tit1} >Nouveautés</div>
      <AllFilms Films={data.getFilms}/>
      <div className={styles.tit2} >Action</div>
      <AllFilms Films={data.getFilms}/>
      <div className={styles.tit3} >Anime</div>
      <AllFilms Films={data.getFilms}/>
      <div className={styles.tit4} >Comedie</div><a href=''>Tout éxplorer</a>
      <AllFilms Films={data.getFilms}/>
      <div className={styles.tit5} >Horreur</div>
      <AllFilms Films={data.getFilms}/>
      <div className={styles.tit6} >Musique</div>
      <AllFilms Films={data.getFilms}/>
    </section>
    </MainLayout>

    );
}

export default Index;
