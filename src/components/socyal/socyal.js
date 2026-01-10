import './socyal.css'
import facebook from '../../resources/svg/facebook.svg';
import twitter from '../../resources/svg/twitter.svg';
import instagram from '../../resources/svg/instagram.svg';
import telegram from '../../resources/svg/telegram.svg';


const Socyal = () => {
    return(
        <div class="social">
            <a href="https://t.me/Transorm_rotate_45deg"><div class="ring te"><img src={telegram} alt="telegram"/></div></a>
            <a href="https://www.instagram.com/rotate_45_deg/"><div class="ring in"><img src={instagram} alt="instagram"/></div></a>
            <a href="#"><div class="ring fb"><img src={facebook} alt="facebook"/></div></a>
            <a href="#"><div class="ring tw"><img src={twitter} alt="twitter"/></div></a>
           
        </div>
    )
}



export default Socyal





