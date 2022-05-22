import {motion} from "framer-motion";
import Backdrop from '../Backdrop/index';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text }) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                // style={{width:'500px',height:'500px'}}
                drag
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                //variants={dropIn}
                intial={{
                    y: "-100vh",
                    opacity: 0,
                }}
                animate={{
                    y: "0",
                    opacity: 1,
                    transition: {
                        duration: 0.1,
                        type: "spring",
                        damping: 25,
                        stiffness: 500,
                    }
                }}
                exit={{
                    y: "100vh",
                    opacity: 0,
                }}
                style={{
                    border: '3px solid magenta',
                    zIndex: 100
                }}
                // initial="hidden"
                // animation="visible"
                // exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>    
        </Backdrop>
    )
};

export default Modal;