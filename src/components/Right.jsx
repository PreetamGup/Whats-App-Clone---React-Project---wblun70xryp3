import React,{useEffect, useState} from 'react';
// import {FaWhatsappSquare, FaSearch, FaWhatsapp} from 'react-icons/fa'
import {ImArrowRight} from 'react-icons/im'
import {RiWhatsappFill} from 'react-icons/ri'
import "../styles/Right.css"

const Right = ({profileIdx, person}) => {
    
    // const [person, setperson] = useState({});

    // const getdata=(profileIdx)=>{
    //   if(profileIdx==null){
    //     return null
    //   }
    //   else{
    //     let personDetails = JSON.parse(localStorage.getItem("data"))[profileIdx]
    //     setperson(personDetails)
    //   }
    // }

    // useEffect(() => {
        

    // }, [profileIdx]);

  

  return (
    <div className={`right ${profileIdx===null ? 'section' : 'rightsection'}`}>
      {profileIdx===null ? 
      
      <div className='callicon'>
          <RiWhatsappFill style={{width : 90, height:90, color:'#0f2e03'}}/>

        <div>
          <h2 style={{fontSize:50, textAlign:'center', color: 'white'}}>Click on Chats to see messages</h2>
        </div>
      </div>
      
      : 
        <>
          <div className='profileTag'>
            <div id='profilePic'>
              <img src={person.profilePic} alt="" />
            </div>

            <h3>{person.name}</h3>
          </div>

          <div className='messagebox '>
              {person.messages.map((message)=>{
                return <><div className='message' style={{float:`${message.from=='self' ? 'left' : 'right'}` }}>{message.message}</div><br /><br/></>
              })}
          </div>
          
          <div className='sendMessage'>
            <div className='input'>
              <input type="text" placeholder='Type here to send messages...'/>
            </div>
            
            <div className='sendIconDiv'>
              <ImArrowRight id='sendIcon'/>
            </div>

          </div>

        </>
      }
      
    </div>
  );
}

export default Right;
