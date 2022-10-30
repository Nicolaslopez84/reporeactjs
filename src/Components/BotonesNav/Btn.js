import "./BtnNav.css"



export default function Btn (props){


    return(
 
        <button onClick={props.onClick} className="btn__nav">{props.children}</button>
    )
}


