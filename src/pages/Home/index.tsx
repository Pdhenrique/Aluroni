import menu from 'data/Menu.json'
import styles from './inicio.module.scss'
import stylesTheme from 'styles/theme.module.scss'

import nossa_casa from 'assets/nossa_casa.png'

import { useNavigate } from 'react-router-dom'

export default function Home(){
   
    let chefRecomendations = [...menu]
    chefRecomendations = chefRecomendations.sort(() => 0.5 - Math.random()).splice(0,3)
    
    const navigate = useNavigate()

    function redirectDetails(dishes: typeof menu[0]){
        navigate(`/dishes/${dishes.id}`, { state: {dishes}, replace: true})
    }

    return(
        <section>
            <h3 className={stylesTheme.title}>
                Recomenções da cozinha
            </h3>
            <div className={styles.recommendation}>
                {chefRecomendations.map(item => (
                    <div key={item.id} className={styles.recomended}>
                        <div className={styles.recomended__image}>
                            <img src={item.photo} alt={item.title}/>
                            <button 
                                className={styles.recomended__button}
                                onClick={() => redirectDetails(item)}
                            >
                                See more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}>Our home</h3>
            <div className={styles.ourHome}>
                <img src={nossa_casa} alt="restaurant"/>
                <div className={styles.ourHome__address}>
                    Rua Vargueiro, 3185 <br /> <br/> Vila Mariana - SP
                </div>
            </div>
        </section>
    )   
}