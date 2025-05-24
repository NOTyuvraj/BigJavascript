import React, { useState } from 'react'

// function ListItem(props){
//   return <li>{props.animal}</li>
// }

// function List(props){
//   return (
//     <div>
//       <ul>
//         {props.animals.map((animal) =>{
//           return animal.startsWith("L") ? <li key={animal}>{animal}</li> :null ;
//         })}
//       </ul>
//     </div>
//   )
// }


// function Greeting() {

//   const animals = ["Snake Cow" , "Lion Cow 1" , "Lion Cow 2" , "Tiger Cow" , "Deer Cow"];

//   return (
//     <div>
//       <h1>Animals </h1>
//       <List animals={animals}/>
//     </div>
//   )
// }


// function Item ({name , isAlive}){
//   // return (isAlive === true) ?<li>{name} ✅</li>:<li>{name}</li>;
//   let itemContent = name ;
//   if(isAlive){
//     itemContent = name + "✅";
//   }

//   return (
//     <li>
//       {itemContent}
//     </li>
//   )
// }

// const animal = [
//   { task : " hello Cow 1 " , id : crypto.randomUUID()},
//   { task : "hello Cow 2 " , id : crypto.randomUUID()},
//   { task : "hello Cow 3 " , id : crypto.randomUUID()},
// ];

// function Button2(){
//   return (
//     <button>Don't Click Me!</button>
//   )
// }

// function Button({text="Click Me!", color="White" , fontSize=22 , handleClick}){
//   const buttonStyle = {
//     color : color,
//     fontSize : fontSize + 'px',
//   };

//   return (
//     <button onClick={handleClick} style={buttonStyle}>{text}</button>
//   )

// }

// function Greeting(){
  
//   const handleButtonClick = () => {
//     window.location.href = "https://google.com"
//   }

//   return (
//     <>
//       <Button handleClick={handleButtonClick}/>
//       {/* <Button  /> */}
//       {/* <Button text="Don't Click Me!" color="Red" fontSize={22}/>
//       <Button color="Green" fontSize={22}/> */}
//     </>
//   );
// }

// const COLORS = ["blue" , 'white' , 'red' , 'black' , 'green']

// function Greeting(){
//   const [backgroundColor , setBackgroundColor] = useState(COLORS[0]);

//   const onButtonClick = (color) = () => {
//     setBackgroundColor(color);
//   }

//   return (
//     <>
//       <div
//         className='app'
//         style={{
//           backgroundColor,
//         }}
//       >
//         {COLORS.map((color)=>{
//           <button
//             type='button'
//             key={color}
//             onClick={onButtonClick(color)}
//             className={backgroundColor === color ? "selected" : ""} 
//           >
//             {color}
//           </button>
//         })

//         }
//       </div>
//     </>
//   )
// }

function Greeting(){

  // const [count , setCount] = useState(4);

  // function decrementCount(){
  //   setCount(prevCount => prevCount-1);
  // }

  // function incrementCount(){
  //   setCount(prevCount => prevCount+1);
  // }

  // return(
  //   <>
  //     <button onClick={decrementCount}>-</button>
  //     <span>{count}</span>
  //     <button onClick={incrementCount}>+</button>
  //   </>
  // )

  // const [person , setPerson] = useState({name: "Jhon Pork" , age: 21});
  
  // const handleIncresingAge = () =>{
  //   console.log("in handleIncreaseAge (before setPerson call): ", person);
  //   const newPerson = {...person ,age : person.age + 1}
  //   console.log("in handleIncreaseAge (after setPerson call): ", person);
  //   // setPerson(newPerson);
  // }

  // console.log("during render: " , person);

  const [value , setValue] = useState("");

  return(
    <>
    <input 
      type='text'
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    </>
  )

}

export default Greeting;  