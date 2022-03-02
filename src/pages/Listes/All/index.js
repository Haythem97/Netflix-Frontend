import React, { useContext } from "react";
import { getFilms } from "../../../graphql/queries/Films";
import { useQuery } from "@apollo/react-hooks";
import styles from "./index.module.scss";


const index = (props) => {
    const { loading, error, data } = useQuery(getFilms);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }


    return (
        <div className={styles.wrapper}>
        <section id="section1">
          <a href="#section3" className={styles.arrow__btn}>‹</a>
          {data.getFilms?.map(getFilm =>
          <div className={styles.item}>
          <video src={getFilm.src} alt="Describe Image"/>
        </div>
        )}
        </section>
        </div>

    );
  };
  
  export default index;
  