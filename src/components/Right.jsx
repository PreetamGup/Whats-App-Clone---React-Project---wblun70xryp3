import React,{useEffect, useState, useRef} from 'react';
// import {FaWhatsappSquare, FaSearch, FaWhatsapp} from 'react-icons/fa'
import {ImArrowRight} from 'react-icons/im'
import {RiWhatsappFill} from 'react-icons/ri'
import "../styles/Right.css"

const Right = ({profileIdx, person}) => {

  const ref = useRef(null); //used for scrolling
  const [inputVal, setinputVal] = useState("");
  
  useEffect(()=>{      // use for scrolling messages
    if(ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth' })
    };
  })
  


   const sendingMsg=()=>{

    if(inputVal!==""){
      let MsgFormat={
      message : "",
      from: ""
    }
    
    MsgFormat.message=inputVal;
    MsgFormat.from='me';
    // console.log( (person));
    person.messages.push(MsgFormat);

    let allData =JSON.parse(localStorage.getItem('data'));

    allData.map(data=>data.id===profileIdx ? data.messages=person.messages :data.messages=data.messages)

    localStorage.setItem('data', JSON.stringify(allData))   //updating database with latest messages
    setinputVal("")
    }

   }

  
  return (
    <div className={`right ${profileIdx===null ? 'section' : 'rightsection'}`}>
      {profileIdx===null ? 
      
      <div className='callicon'>
          <RiWhatsappFill style={{width : 90, height:90, color:'#0f2e03'}}/>

        <div>
          <h2 style={{fontSize:50, textAlign:'center', color: 'white'}}>Click on Profile to see messages</h2>
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
                return <><div className='message' style={{float:`${message.from=='self' ? 'left' : 'right'}` }}>{message.message}</div><div ref={ref} /><br /><br/></>
              })}
          </div>
          
          <div className='sendMessage'>
            <div className='input'>
              <input type="text" placeholder='Type here to send messages...' value={inputVal} onChange={(e)=> setinputVal(e.target.value)}/>
            </div>
            
            <div className='sendIconDiv' onClick={sendingMsg}>
              <ImArrowRight id='sendIcon'/>
            </div>

          </div>

        </>
      }
      
    </div>
  );
}

export default Right;
