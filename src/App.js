// import {useState} from "react";  //herhangi bir state oluşturabilir ve return ettiğim herhangi bir yerde kullanabiliriz.
//
//
// function App() {
//     const [name, setName] = useState('Kaan');  // 2 adet oluşturulan sabit değişkenleri atayarak return içerisinde çağırılmasını sağlayabiliriz.
//     const [age, setAge] = useState(10); // Sabit değişkenleri isimlendirirken state ismine ne verirsek değer fonksiyonuda benzer adlandırma kullanmamız gerekir.
//   return (
//     <div className="App">
//       <h1>Hello {name} </h1><h2>{age}</h2>
//         {/*Dinamik verileri burada çağırabiliriz.*/}
//         <button onClick={() => setName('Kutucu') }>Change Name</button>
//         <button onClick={() => setAge(11) }>Change Age</button>
//     </div>
//   );
// }
//
// export default App;
//


// /* ARRAY STATE OLUŞTURMA*/
//
//     import {useState} from "react";
//
//
//
//     function App () {
//
//         const [friends , setFriends] = useState(['Ozzy', 'Ozzy2' , 'Ozzy3'])
//
//
//         return (
//             <div className="App">
//
//                 {
//                 friends.map ((friends, index) =>(
//                     <h1 key={index}  >Hello {friends}</h1>))  //listeleme işlemi yapılıyorsa return edilen classa key attribute tanımlamamız gerekmektedir.
//                 }
//                 <button onClick={() => setFriends([...friends, "Ozzy4"])}>Add</button>
//                 {/*Dizi eklerken diğer dizi elemanlarını korumak için ...friends metodunu kullandık*/}
//             </div>
//         )
//     }
//
//
//     export default App;









//
// /*OBJECT STATE OLUŞTURMA*/
//
//
// import {useState} from "react";
//
// function App () {
//     const [adress, setAdress] = useState({title:'İstanbul', zipcode: 34700 })   // object döndürmek için kullanılıması geren yapı.
//
//     return (
//         <div className='App'>
//             <div> {adress.title} {adress.zipcode}</div>
//             <button onClick={() => setAdress({...adress , title: 'Ankara'})}> Add Adress</button>
//             {/*objelerden biriniz vermezsek ...zipcode medotunu kullanmamız gerekir.*/}
//         </div>
//     )
//
//
// }
//
//
// export default App;
//




/*useEffect hook ile yaşam döngülerini yakalayabilme*/


// import {useState, useEffect} from "react";
//
//
//
// function App (){
//  const [age, setAge] = useState(0);
//  const [name,setName] = useState ("Kaan");
//
//  useEffect(() => {
//     console.log("Component Mount Edildi");
//  }, []);
//
//  useEffect( () => {
//     console.log("Age state güncellendi");
//  }, [age]);                             //state özel methodu dinlemek için [] deps'i koyarak sağlayabiliriz.
//
//  useEffect( () => {
//     console.log("Name state güncellendi");
//  }, [name]);                              //name alanı bir kere değişeceği için güncelleme işlemini bir kere yapacaktır.
//
//
//
//
//    return (
//        <div className="App">
//           <h1>{age}</h1>
//           <button onClick={() => setAge(age + 1)} >Click</button>
//           <br/><br/> <hr/>
//           <button onClick={() => setName("Kutucu")} >Click</button>
//        </div>
//    )
//
// }
//
// export default App;





import Counter from "./components/Counter";
import {useState} from "react";

function App () {
   const [isVisible, setIsVisible] = useState(true); //gelecek ilk değerin true döndürmesi ekranda gösterilmesini sağlayacak. Buton parametresine false atarsak click işlemi yapıldığında false döndürecektir.
   return (
       <div className="App">
          {isVisible && < Counter/> }
       {/*   True değer döndürdüğü için açılış ekranında göstermiş olacaktır. */}
          <br/>

          <button onClick={ () => setIsVisible(!isVisible)}>Click</button>
       {/*   !isVisible vererek falsse değer döndürerek ekranda kaybolmasını sağlayacağız. */}
       </div>
   );
}

export default App;
























