//jag hade nog egentligen delat upp detta i två olika knappar som jag kunde återanvända bättre, men det behövs inte för detta projekts scope.
function Buttons(){

    return(
        <div className="Buttons">
        <button className="Toggler" /*onClick={}*/ >
            I toggle
        </button>
        <button className="Incrementer" /* onClick={}*/ >
            I increment
        </button>
        </div>
    )
}
export default Buttons;