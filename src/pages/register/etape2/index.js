import React, { useState, useEffect } from 'react';
import styles from "./index.module.scss";

const Index = () => {

  return (
    <section>
    <div className={styles.header}>
    <a href="/" className={styles.logonetflix} data-uia="netflix-header-svg-logo">
    <svg viewBox="0 0 111 30" className={styles.logonetflix} focusable="true"><g id="netflix-logo">
      <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg></a>
      <a href="/register" className={styles.dec} data-uia="header-signout-link">Se déconnecter</a></div>

      <div className={styles}>
        <div className={styles} >
          <div>
            <div className={styles.et}>
            <div className={styles}>
              <span id="" className={styles.et2}>ÉTAPE <b>2</b> SUR <b>3</b></span>
              <br/>              <br/>
              <h3 className={styles.se}> Sélectionnez le forfait qui vous convient</h3>
            </div>
          </div>
         <br/>              <br/>              <br/>

          <div className={styles.et}>
            <ul className="" >
                 <li className="dd"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark-group--icon" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>
                    <span className="" > Regardez autant que vous voulez. Sans publicité.</span></li>
                <li className=""> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark-group--icon" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>
                    <span className=""> Recommandations personnalisées.</span></li>
                <li className="" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="checkmark-group--icon" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>
                    <span> Changez ou annulez votre forfait à tout moment.</span></li></ul>
            </div>
            </div>
              
              <br/>
              <div className={styles.plangrid} data-uia="plan-grid">
                            <div>
                              
                              <div className={styles.radio_button} role="radiogroup" aria-label="Forfait" aria-describedby="planGrid_planChoice_description" data-uia="plan-grid-plan-selector">
                              
                              <input type="radio" id="radio1" name="radios" value="all" />
                              <label for="radio1">Standard</label>
                              <input type="radio" id="radio2" name="radios" value="false"/>
                              <label for="radio2">Premium</label>
                              
                              </div>
                            </div>
                            </div>
                            
                            <table className={styles.table} role="table" >
                            <tbody>
                            
                            <tr role="row">
                              <td className={styles.f1}>Abonnement mensuel</td>
                              <td className={styles.f2}>30&nbsp;€</td>
                              <td className={styles.f3}>60&nbsp;€</td>
                            </tr>
                            
                            <tr role="row">
                              <td className={styles.f1} >Qualité vidéo</td>
                              <td className={styles.f2}><div>Meilleure</div></td>
                              <td className={styles.f3}><div>Optimale</div></td>
                            </tr>
                                    
                        <tr role="row" >
                            <td className={styles.f1}>Résolution</td>
                            <td className={styles.f2}><div>1080p</div></td>
                            <td  className={styles.f3}><div>4K+HDR</div></td>
                        </tr>
                            
                        <tr role="row" >
                          <td className={styles.f1}>Netflix sur votre TV, ordinateur, smartphone et tablette</td>  
                          <td  className={styles.f2}><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg></span></td>
                          <td className={styles.f3} ><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg></span></td>
                        </tr>
                        <tr role="row" >
                          <td className={styles.f1}>Nouveautés 2022</td>  
                          <td  className={styles.f2}><span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span></td>
                          <td className={styles.f3} ><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="planGrid__booleanGraphic planGrid__booleanGraphic--isCheck" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg></span></td>
                        </tr>
                    
                    </tbody> 
                    </table>

                    <small className={styles.plangriddic}>
                      <span id="" data-uia="plan-grid-legal">La disponibilité de la HD (720p), de la Full&nbsp;HD (1080p), de l'Ultra&nbsp;HD (4K) et de la HDR dépend de votre connexion Internet et des capacités de l'appareil. Tous les contenus ne sont pas disponibles dans toutes les résolutions. Pour en savoir plus, veuillez consulter nos <a href="https://help.netflix.com/legal/termsofuse" target="_blank">Conditions d'utilisation</a>.
                      </span>
                      </small>
                      <small className={styles.plangriddic}>
                        <span id="" data-uia="plan-grid-legal">Seules les personnes qui vivent avec vous peuvent utiliser votre compte. Regardez Netflix en simultané sur 4&nbsp;appareils différents avec le forfait Premium, sur&nbsp;2 avec le forfait Standard, et sur&nbsp;1 avec le forfait Essentiel.</span></small></div></div>
                        <div >
                          <button type="button" autocomplete="off" tabindex="0" className={styles.Button} data-uia="cta-plan-selection" placeholder="planSelection_button_continue">Suivant</button>
                          </div>

                                                           

    </section>
  );
};
export default Index;
