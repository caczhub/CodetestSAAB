function Display(props){
return(
    <div className="Display">
        
        {/*sätter css visibility till hidden så den bibehåler sidans proportioner*/}
        <img className={props.displayImg ?  "": "invisible"  } src={props.imgSrc} alt=""/> 
        <h2>{props.number}</h2>
        
    </div>
)
}
export default Display;