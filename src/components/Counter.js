// import React from "react";
// import {useState} from "react";
//
//
// function Counter () {
//     const [count, setCount] = useState(0);
//
//     const increase = () => {
//       setCount(count +2);
//     };
//
//     const decrease = () => {
//         setCount( count -2);
//     }
//
//     return (
//         <div>
//           <h1>{count}</h1>
//             {/*statik olarak göstermek yerine dinamik olarak göstermemize olanak sağlar*/}
//             <button onClick={increase}>+</button>
//             <button onClick={decrease}>-</button>
//         </div>
//     )
// }
//
// export default Counter;


/* Component Unmount İşlemi */



import {useState, useEffect} from "react";



function Counter () {

    const [number , setNumber] = useState(0);


    useEffect( () => {
      const interval = setInterval (() => {
            setNumber((n) => n + 10 );
        }, 2000 );

      return () => clearInterval(interval);
    },  []);

    useEffect( () => {
        console.log("State Güncelleniyor...")
    },[] )


    return (
        <div>
            <h1>{number}</h1>
            <br/>
            <button onClick={ () => setNumber(number )}>Click me</button>
        </div>
    )

}


export default Counter;