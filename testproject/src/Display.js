function Display(props){
return(
    <div className="Display">
        
        {props.displayImg ? <img src={props.imgSrc} alt=""/> : <></> }
        <h2>{props.number}</h2>
    </div>
)
}
export default Display;