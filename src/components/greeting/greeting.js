
import './greeting.css';
import '../../resources/fonts/fonts.css'
import Socyal from '../socyal/socyal';
//import CV from '../../../public/CV/Uminskyi_Roman_FRONTEND_DEVELOPER.pdf'

const Greeting = () => {
    return(
        
        
        <div class="greetings">

            <div class="information">
                <h1>I’m Roman Uminskyi. a Frontend developer.</h1>

                <p class="hello">Hello! I'm a Frontend Developer from Zhytomyr. I focus on writing clean, efficient code with
                    a strong emphasis on solving problems in an elegant and visually appealing way. My goal
                    is to combine aesthetics and functionality in every project I work on."</p>

                <Socyal/>


                <div class="btn">
                    <button class="request">Send Request</button>
                    <a href="/CV/Uminskyi_Roman_FRONTEND_DEVELOPER.pdf" download> 
                        <button type='button' class="cv">Download CV</button>
                    </a>
                    
                </div>

            </div>

            <div class="photo">
                <img src="img/photo.png" alt="photo"/>
            </div>

        </div>
        
    )
}





export default Greeting








