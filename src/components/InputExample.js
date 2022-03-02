// import {useState} from "react";
//
// function InputExample () {
//    const [name, setName] = useState("") ;       // isim ve soyisim değişkenlerini tutacağımız ve inputlarda çağıracağımız için state methodunda tutuyoruz.
//    const [surname, setSurname] = useState("");
//
//    const onChangeName = (event) => setName(event.target.value);   //input valuelerini değiştirebilmek için oluşturulan method. İki metodun changename ayarları birbirinden farklı olması lazımki form değerleri birbirinden bağımsız çalışsın.
//    const onChangeSurname = (event) => setSurname(event.target.value);
//
//     return (
//     <div>
//         <input value={name} onChange={onChangeName}/> <br/><br/>
//         {/*onchange vererek name input değerini ve surname input değerini default olarak değiştirip usestate ile bağlıyoruz.*/}
//         <input value={surname} onChange={onChangeSurname} /> <br/><br/>
//
//         {name} {surname}
//     </div>
//     )
// }
//
// export default InputExample;


import {useState} from "react";

function InputExample () {
    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (event) => {

      setForm({...form, [event.target.name]: event.target.value });

    };

    return (
        <div>
            <input name="name" value={form.name} onChange={onChangeInput}/>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>

            {form.name} {form.surname}
        </div>
    )
}

export default InputExample