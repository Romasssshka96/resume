import './intrestedMe.css'
import { useState, useEffect } from 'react';
import ModalWindow from '../modalWindow/modalWindow';
import '../../resources/fonts/fonts.css'

const IntrestedMe = () => {


    const email = 'krosawchick@gmail.com'


    const [modal, setModal] = useState({
        isOpen: false,
        msg: "",
        type: "success", // success | error
    });


    const showModal = (msg, type = "success") => {
        setModal({ isOpen: true, msg, type });
    };


    useEffect(() => {
        if (!modal.isOpen) return;
    
        const timer = setTimeout(() => {
          setModal((prev) => ({ ...prev, isOpen: false }));
        }, 5000);
    
        return () => clearTimeout(timer);
    }, [modal.isOpen]);


    const copyEmail = async () => {
        try {
          await navigator.clipboard.writeText(email);
          showModal("Email copied to clipboard ✔", "success");
        } catch (error) {
          showModal("Failed to copy email ❌", "error");
        }
    };

    
    //const handleEmailClick = () => {
    //    window.location.href = `mailto:${email}`;
    //  };



    return(
        <div class="message">
            <h2>Interested working with me?</h2>
            <button onClick={copyEmail}>Email Me</button>

            {modal.isOpen && (
                <ModalWindow
                  msg={modal.msg}
                  type={modal.type}
                  onClose={() =>
                    setModal((prev) => ({ ...prev, isOpen: false }))
                  }
                />
            )}
        </div>


        
    )
}


export default IntrestedMe



















