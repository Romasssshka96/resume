import './modalWindow.css'
import '../../resources/fonts/fonts.css'


const ModalWindow = ({msg, onClose}) => {

    return(
        <div className="modal" onClick={onClose}>
            <h2 className='msg'>{msg}</h2>
        </div>
    )


}


export default ModalWindow















