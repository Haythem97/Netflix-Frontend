import React from 'react';
import Header from '../header/Header/Header';
import Footer from '../footer/Footer';
import styles from "./MainLayout.module.scss";

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <Header/>
            </header>
            <main>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Mainlayout;
