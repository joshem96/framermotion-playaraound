import logo from './logo.svg';
import {motion, AnimatePresence} from "framer-motion"
import { useState,useEffect } from 'react';
import Modal from './Components/modal/index.jsx';



import './App.css';

function ModalApp() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  (() => console.log('re render'))();

  return (
    <div className="modal-button-wrap">

    <motion.button
    drag
    onDragStart={() => console.log('drag started')}
    onDragEnd={() => console.log('drag ended')}
    onDrag={() => console.log('currently dragging')}
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}}
    className='save-button'
    onClick={() => (modalOpen ? close() : open() )}
    >
    Launch Modal
    </motion.button>

  
    
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
     {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </AnimatePresence>

    </div>
  );
}

export default ModalApp;
