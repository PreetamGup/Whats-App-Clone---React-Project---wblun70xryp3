import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa'
import "../styles/Left.css"

const Left = ({people, gettingMsg}) => {
    const [searchPerson, setsearchPerson] = useState("");

    // const handleClick=(idx, e)=>{         
    

    // }


    const handleSearch=(e)=>{
      setsearchPerson(e.target.value);
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
                  <div className='profileCard' onClick={(e)=> gettingMsg(idx,e)} key={idx} id={idx}>
                      <div id='profilePic'>
                        <img src={person.profilePic} alt="" />
                      </div>

                      <h3>{person.name}</h3>

                      <div className="notificationEnable" >
                          {   person.messages.length}
                      </div>

                  </div>
              )
            })}    
        </div>
      
    </div>
  );
}

export default Left;
