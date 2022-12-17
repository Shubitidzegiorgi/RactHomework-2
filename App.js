import './App.css';
import React from 'react';



const ParentComp=()=>{
const UsersArray=[
    {id:1, name :"ana", age:22},
    {id:2, name :"nika", age:23},
    {id:3, name :"eka", age:24},
    {id:4, name :"gio", age:22}
  ];


 return (
 <>

 <ChildComp UsersArray={UsersArray} isUserLogedIn={false}></ChildComp>
  </>
 )
  
  } 
const ChildComp=({UsersArray,isUserLogedIn})=>{
  if(!isUserLogedIn){
    return <h1>"you are not logged in "</h1>
  }
return (
<div>
{UsersArray.length>0 ?(
  <>
  {UsersArray.map((item)=>{
    return <h1 key={item.id}>{item.name } is {item.age} years old </h1>;
  })}
  </>
): (
  " there are no users "
)}
</div>

)
}
const Wraper=({children})=>{
  return <>
  <NavBar></NavBar>
  {children}
  <Footer></Footer>
  </>
}

const NavBar=()=>{
  const Navigation=["home", "products", "contact", "about us"];
 
  return(
  <ul style={{color:"red", display:"flex", justifyContent:"space-around",fontSize:"24px", backgroundColor:"black"}}>
    {Navigation.map((item)=>
      <li key={item} style={{padding:"20px",}}>{item}</li>
    )}
  </ul>
  )
}
const Footer=()=>{
  const FootCont=["contactUs", "socialMedia"];
  return (
  <ul style={{color:"red", display:"flex", justifyContent:"space-around", fontSize:"24px"}}>
    {FootCont.map((item)=>
      <li key={item}>{item}</li>
    )}
  </ul>
    )
}

const App=()=> {


  return (
    <div>
      <Wraper>
        <h1>hello world</h1>
        <button>click me </button>
      </Wraper>
      
      <ParentComp></ParentComp>
      
    </div>
  );
}

export default App;