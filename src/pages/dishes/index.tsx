import styles from './dishes.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import menu from 'data/Menu.json'
import { lazy } from 'react'


const DishesTags = lazy(() => import('components/DishesTags'))
const DefaultPage = lazy(() => import('components/DefaultPage'))
const NotFound = lazy(() => import('pages/notFound'))


export default function Dishes(){
 
    const {id} = useParams()

    const navigate = useNavigate()

    const dishes = menu.find(item => item.id === Number(id))

    if(!dishes){
        return <NotFound/>
    }

    return(
        <DefaultPage>
            <button className={styles.goBack} onClick={() => navigate(-1) }>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.title}>
                    {dishes.title}
                </h1>
                <div className={styles.image}>
                    <img src={dishes.photo} alt={dishes.title}/>
                </div>
                <div className={styles.content}>
                    <p className={styles.content__description}>
                        {dishes.description}
                    </p>
                    <DishesTags {...dishes}/>
                </div>
            </section>
        </DefaultPage>
    )
}