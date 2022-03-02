import React, { useContext } from "react";
import { getFilms } from "../../../graphql/queries/Films";
import { useQuery } from "@apollo/react-hooks";
import styles from "./AllFilms.module.scss";


const AllFilms = (props) => {
  
  const { loading, error, data } = useQuery(getFilms);
    
  if (loading) {
      return "loading...";
  }

  if (error) {
      console.log(error);
      return null;
  }
   

    return (
      <div className={styles.div_width}>
        <br></br>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"></link>
              <br></br>
              <br></br>

      <div className={styles.all_movie_div}>
       {data.getFilms?.map(getFilm =>
       
       <div className={styles.card}  key={getFilm.id}>
      <div className={styles.card__image}>
      <img src={getFilm.src}/>      
      
      </div>
      <div className={styles.panel}>
        <div className={styles.panel__row + ' ' + styles.panel__buttons}>
          <div className={styles.panel__icons}>
            <a href="https://www.youtube.com/watch_popup?v=HWV5EsOVlpo&amp;autoplay=1" target="_blank">
              <i className="fa fa-play"></i>
            </a>
          </div>
          <div className={styles.panel__icons}>
            <a id="bookmarkme" href="#" rel="sidebar" title="bookmark this page">
              <i className="fa fa-plus"></i>
            </a>
          </div>
          <label className={styles.panel__icons+ ' ' +styles.custom_checkbox}>
            <input type="checkbox"/>
            <i className="fa fa-thumbs-o-up checked"></i>
            <i className="fa fa-thumbs-up unchecked"></i>
          </label>
          <label className={styles.panel__icons+ ' ' +styles.custom_checkbox}>
            <input type="checkbox"/>
            <i className="fa fa-thumbs-o-down unchecked"></i>
            <i className="fa fa-thumbs-down checked"></i>
          </label>
          <div className={styles.panel__icons}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
        <div className={styles.panel__row}>
          <span className={styles.rating}>99% Match</span><span className={styles.year}>1995</span><b>1h 35m</b>
        </div>
        <div className={styles.panel__row}>Horror&nbsp; • &nbsp;Mystery&nbsp; • &nbsp;Thriller</div>
        </div>
      </div>
                  )}
      
      </div>
      </div>

    );
  };
  
  export default AllFilms;
  