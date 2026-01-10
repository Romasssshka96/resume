import './whyMe.css'
import WhiMeItem from '../whyMeItem/whyMeItem.js'
import dialogue from '../../resources/svg/dialogue.svg'
import manAtTheTable from '../../resources/svg/man-at-the-table.svg'
import handshake from '../../resources/svg/handshake.svg'
import star from '../../resources/svg/star.svg'



const info = [
    {
        id: 1,
        img: dialogue,
        title: 'Communicative',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        id: 2,
        img: manAtTheTable,
        title: 'Professional',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        id: 3,
        img: handshake,
        title: 'Collaborative',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    },
    {
        id: 4,
        img: star,
        title: 'Client’s Favourite',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    }
]

const whiMe = () => {
    return(
        <div class="why-my">

            <h2>Why Hire Me?</h2>
            <div class="wrap">

                {info.map ((props) => (
                    <WhiMeItem key={props.id} {...props}/>
                ))}

            </div>

        </div>
    )
}




export default whiMe













