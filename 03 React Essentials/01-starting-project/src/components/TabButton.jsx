// Both works~

// export default function TabButton(props){
//     return (
//         <li><button>{props.children}</button></li>
//     )
// }


const onClick = (event) => {
    console.log(event)
}

export default function TabButton({children, onClick, isSeleted}){
    return (
        <li>
            <button className={isSeleted ? 'active' : undefined} onClick={onClick}>{children}</button>
        </li>
    )
}