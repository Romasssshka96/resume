import './footer.css'
import Socyal from '../socyal/socyal'

const Footer = () => {

    const email = 'krosawchick@gmail.com'

    return(
        <footer>
            <h2>Contacts : </h2>
            <div className="wrap">
                <h4>Email : {email}</h4>
                <Socyal/>
            </div>


        </footer>
    )
}


export default Footer















