 Profiles = [
    {
      id:1,
      name: "Varun Ahuja",
      profilePic: "https://picsum.photos/id/50/300/300",
      messages: [
        { message: "Hello Friend . How are you ?", from: "self" },
        { message: "I am good how are you ?", from: "me" },
        { message: "Doing Good", from: "self" },
        { message: "When is our Exam ?", from: "self" },
      ],
    },
    { 
      id:2,
      name: "Anurag Sinha",
      profilePic: "https://picsum.photos/id/15/300/300",
      messages: [
        { message: "Where are you?", from: "self" },
        { message: "I am in school", from: "me" }
      ],
    },

    { 
      id:3,
      name: "Manoj Shukla",
      profilePic: "https://picsum.photos/id/180/300/300",
      messages: [
        { message: "Bro, Khelne aa rha hai ?", from: "self" },
        { message: "Yes, bro. Par kaunse ground me aana hai", from: "me" },
        { message: "Society ke ground me aaja ", from: "self" },
        { message: "5 baje aa jana ", from: "self" },
        { message: "Ok ", from: "me" }
      ],
    },
  ];
  

module.exports = Profiles;
    // localStorage.setItem("data", JSON.stringify(Profiles));



  
  
  // function(){
  // obj={message:"",from:""}
  // obj.message="The exam is on friday";
  // obj.from="me";
  // Profiles[0].messages.push(obj)
  // }