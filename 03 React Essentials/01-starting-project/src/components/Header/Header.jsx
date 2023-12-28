import conceptsImg from '../../assets/react-core-concepts.png'

// can group on a folder to store css
import './Header.css'

// both can export the function 
// export default function Header(){
//     return(
//       <header>
//         <img src={conceptsImg} alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           Fundamental React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//     )
// }


const header = function Header(){
    return(
      <header>
        <img src={conceptsImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}
export default header;