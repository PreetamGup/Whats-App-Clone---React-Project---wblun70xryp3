import React, {useEffect, useState} from 'react'
import Left from './Left';
import Right from './Right';
import Profiles from '../data';
import '../styles/App.css';




const App = () => {
  const [profileIdx, setprofileIdx] = useState(null);
  const [person, setPerson] = useState({})

  const gettingMsg=(idx, e)=>{
    console.log(idx);
    setprofileIdx(idx)
    const data= JSON.parse(localStorage.getItem('data'))
    // .filter(person=> person.id===idx)
    const personData= data == null ? "" : data.filter(person=> person.id===idx)   // handel null error
    console.log(personData[0]);
     setPerson(personData[0])

    const profileCardClasss= document.getElementsByClassName("profileCard")
    // console.log(profileCardClasss);
    for(let i=0; i<profileCardClasss.length; i++){
      profileCardClasss[i].style.backgroundColor="#0f2e03"
      profileCardClasss[i].children[2].style.color='white'
    }


    const profileCard= document.getElementById(idx);
    profileCard.style.backgroundColor='#7fd956'
    profileCard.children[2].style.color='#7fd956'
  }
  
  useEffect(() => {

    localStorage.setItem("data",JSON.stringify(Profiles))
  }, []);

  return (
    <div id="main">
      <h2>Reload Website If Data is not visible</h2>
      <div className='container'>
      
      <Left gettingMsg={gettingMsg} people={JSON.parse(localStorage.getItem('data'))}/>
      <Right gettingMsg={gettingMsg} profileIdx={profileIdx} person={person}/>

      </div>
      
    </div>
  )
}


export default App;
