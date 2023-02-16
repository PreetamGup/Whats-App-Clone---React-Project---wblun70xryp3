import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import "../styles/Left.css"

const Left = ({people, gettingMsg}) => {
    const [searchPerson, setsearchPerson] = useState("");


    const handleSearch=(e)=>{      //Searching person
      setsearchPerson(e.target.value);
    }

    const notificationCount=(messages)=>{
      let count=0;
      
        for(let i= messages.length-1; i>=0; i--){
          let status=(messages[i].from);
         
          if(status==='self'){
            count= count+1;
            
          }else{
            return count;
          }
          
        }

    }

   
    

  return (
    <div className='left section'>
        <div className="searchBar">
            <div id='searchIconDiv'>
                <FaSearch id='searchIcon'/>
            </div>
            
            <input type="text"  placeholder='Search user by name .....' id='search' onChange={(e)=>{handleSearch(e)}}/>
        </div>

        <div className='people'>
            {people.filter(search=>{
              if(searchPerson==""){
                return search
              }else if((search.name.toLowerCase()).includes((searchPerson.toLowerCase()))){
                return searchPerson
              }
            }).map((person, idx)=>{
              return (
                  <div className='profileCard' onClick={(e)=> gettingMsg(person.id,e)} key={idx} id={person.id}>
                      <div id='profilePic'>
                        <img src={person.profilePic} alt="" />
                      </div>

                      <h3>{person.name}</h3>

                      {notificationCount(person.messages)===0?
                      
                      <div className="notificationEnable"  style={{visibility:'hidden'}}>
                          {notificationCount(person.messages)}
                      </div>
                      
                      :
                      <div className="notificationEnable" >
                          {notificationCount(person.messages)}
                      </div>}

                  </div>
              )
            })}    
        </div>
      
    </div>
  );
}

export default Left;
