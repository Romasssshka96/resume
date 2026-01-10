import { useState } from 'react'
import './portfolio.css'
import PortfolioItem from '../portfolioItem/portfolioItem'


const data = [
    {
        id: 1,
        src: 'https://romasssshka96.github.io/marvelReactApp_changeToHooks/',
        title: 'marvel',
    },
    {
        id: 2, 
        src: 'https://task-manager-fullstack-v10o.onrender.com/',
        title: 'taskManagerFULLSTACK',
    },
    {
        id: 3, 
        src: 'https://romasssshka96.github.io/halseyFood/',
        title: 'healsyFood',
    },
]

const Portfolio = () => {

    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => {
      setActiveId(prev => (prev === id ? null : id));
    };


    return(
        <div class="portfolio">
            <h2>Portfolio</h2>
            <div class="grid">

                {data.map((props) => (
                    <PortfolioItem 
                    key={props.id} 
                    {...props} 
                    onToggle={()=>toggle(props.id)}
                    isActive={activeId === props.id}
                    />
                ))}


            </div>

        </div>
    )
}


export default Portfolio
















