// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';
// // import Textform from './Components/Textform';
// // import About from './Components/About';
// // let name="kingpin"
// function App() {
//   return (
//     // <div classNameName="blank">Lovely</div>
//     <>
//    <Navbar/>
// {/* <Navbar title="textutils" about="kya lagta tha nhi sikh payenge"/> */}
// <div className="container">

//   {/* <Textform heading="enter your text here for heading "/> */}
//   <About/>
// </div>
//     </>
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const [data,setData]=useState([])
//   useEffect(()=>{
//    getList();
//   },[])
//   console.warn(data)
//   function getList()
//   {
//     fetch('https://fakestoreapi.com/products').then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn("response is ", resp)
//         setData(resp);
//       })
//     })
//   }
//   function deleteUser(id)
//   {
//     // alert(id)
//     fetch(`https://fakestoreapi.com/products ${id}`,{
//       method:'DELETE'
//     }).then(
//       (result)=>{
//         result.json().then((resp)=>
//         {
//           console.warn(resp)
//           getList()
//         })
//       }
//     )
//   }
//   return (
//     <div>
//       <h1>Get method </h1>
//       <table border="2">
//         <tr>
//           <td>name</td>
//           <td>id</td>
//           <td>email</td>
//           {/* <td></td>
//           <td></td> */}
//         </tr>
//       {data.map((item)=>
//         <tr>
//         <td>{item.title}</td>
//         <td>{item.id}</td>
//         <td>{item.price}</td>
//          <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
//       </tr>
//       )}
//       </table>
//     </div>
//   )
// }
// import React from 'react'
// import Form from './Components/Form'
// export default function App() {
//   return (
//     <div>
//      form is  <Form />
//     </div>
//   )
// }
