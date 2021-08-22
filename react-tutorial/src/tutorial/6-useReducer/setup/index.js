import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer'
// reducer function

const Index = () => {

  const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent:''
  }

  const [ name,setName ] = useState('')
  const [ state,dispatch ] = useReducer(reducer,defaultState)
  // const [ people,setPeople ] = useState(data)
  // const [ showModal,setShowModal ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      const newPerson = { id:new Date().getTime().toString(),name }
      dispatch({type:'ADD_PERSON', payload:newPerson})
      setName('')
    }
    else {
      dispatch({type:'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  }

  // const removePerson = (id) => {
  //   dispatch({type:'REMOVE_PERSON', payload:id})
  // }

  return <>
  { state.isModalOpen && 
    <Modal modalContent={state.modalContent} closeModal={closeModal} /> 
  }
  <form onSubmit={handleSubmit} className='form'>
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <button type='submit'>add</button>
  </form>
  {state.people.map((person) => {
    return (
      <section className="item" key={person.id}>
        <h4>{person.name}</h4>
        <button onClick={() => dispatch({type:'REMOVE_PERSON',payload:person.id}) }>remove</button>
      </section>
    )
  })}
  </>;
};

export default Index;
