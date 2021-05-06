function Display(props){
return(
    <div className="Display">
        <img src={props.imgSrc} alt=""/>
        <h2>{props.number}</h2>
    </div>
)
}
export default Display;