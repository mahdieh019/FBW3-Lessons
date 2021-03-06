import React ,{useReducer} from 'react'
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACT,
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

const ContactState=(props)=>{
    const initialState={
        contacts:[
            {
                id:1,
                name:'Romal Smith',
                email: 'romal@gmail.com',
                phone:'015-111-111',
                type:'personal'
            },
            {
                id:2,
                name:'John Smith',
                email: 'john@gmail.com',
                phone:'015-222-231',
                type:'personal'
            },
            {
                id:3,
                name:'Sina ',
                email: 'sina@gmail.com',
                phone:'015-333-333',
                type:'personal'
            },
            {
                id:4,
                name:'Sima ',
                email: 'sima@gmail.com',
                phone:'015-444-444',
                type:'business'
            }
        ]
    };
    const [state,dispatch]=useReducer(contactReducer,initialState);
    //ADD_CONTACT
    const addContact=(contact)=>{
        contact.id=uuid.v4();
        dispatch({type : ADD_CONTACT ,payload:contact})
    }
    //DELETE_CONTACT
    //Set Current Contact
    //Update
    //Filter


    return(
        <contactContext.Provider

         value={{contacts:state.contacts}}>
            
            {props.children}
        </contactContext.Provider>

    )
}
export default ContactState;