import React from 'react'
import PropTypes from 'prop-types'

const ContactItem=({contact})=> {
    const {id,name,email,phone,type}=contact
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '} <span style={{float:'right'}} className={'badge '+(type==='personal' ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase()+type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {
                    <li>
                        <i className='fas fa-envelop-open' />{email}
                    </li>
                }
                {
                    <li>
                        <i className='fas fa-mobile-alt' />{phone}
                    </li>
                }

               


            </ul>

            <p>

                <button className="btn btn-dark btn-sm-radius">Edit</button>
                <button className="btn btn-danger btn-sm-radius">Delete</button> 
            </p>
        </div>
    )



}
ContactItem.prototype = {

    contact:PropTypes.object.isRequired
}

export default ContactItem;
