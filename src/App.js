import React from 'react';
import FormInput from './components/FormInput';
import Listtodo from './components/Listtodo';
import Footer from './components/Footer';
import {Data} from './components/Data'
import Modal from './components/Modal';
import {useState} from 'react';

function App() {

  const[openModal, setOpenModal] = useState(false)
  return (
    <Data>
    <div className="PopUp">
      <h1>MY PROFILE</h1>
      <button className="openModalBtn" 
      onClick={() =>{setOpenModal(true);}}>Mở</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>

    <div className="App">
      <h1>To Do List</h1>
      <FormInput/>
      <Listtodo/>
      <Footer/>
    </div>
    </Data>
  );
}

export default App;
