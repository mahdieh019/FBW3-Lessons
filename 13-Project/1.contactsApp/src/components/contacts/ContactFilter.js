import React , { useContext, useRef,useEffect}from 'react' //rafc
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext=useContext(ContactContext);
    // const contactFilter=contactContext.ContactFilter;
    // const clearFilter=contactContext.clearFilter;
    const {filterContacts,clearFilter,filtered}=contactContext;
    const text=useRef('');
    useEffect(()=>{
        if(filtered===null){
            text.current.value='';
        }
    })

    const onChange= e =>{
        if(text.current.value !==''){
            filterContacts(e.target.value)
        }
        else{
            clearFilter();
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange}/>
        </form>
    )
}
export default ContactFilter 