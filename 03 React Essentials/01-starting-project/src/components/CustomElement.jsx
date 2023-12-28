// export default function CustomElement(props){
//     return (
//         <li key={props.id}>
//             <img src={props.image}/>
//             <h3>{props.title}</h3>
//             <p>{props.desc}</p>
//         </li>
//     )
// }

export default function CustomElement( {image,title,description} ){
    return (
        <li>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}