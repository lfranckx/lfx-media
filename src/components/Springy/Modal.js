import { motion } from 'framer-motion';  
import Backdrop from './Backdrop';

const Modal = ({ handleClose, text }) => {
    return (
        <>
            <Backdrop 
                onClick={handleClose}
            >
                <motion.div>

                </motion.div>
            </Backdrop>
        </>
    )
}

export default Modal;