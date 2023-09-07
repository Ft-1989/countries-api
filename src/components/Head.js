import "../styles/Head.css"

function Head(props) {

    let width = window.innerWidth;
    const moonSolid = `${process.env.PUBLIC_URL}/images/moon-solid.svg`;
    const moonRegular = `${process.env.PUBLIC_URL}/images/moon-regular.svg`;


    return(
        <div className="Head position-relative">
            <div className="container d-flex justify-content-between py-3">
                <h2>Where in the world?</h2>
                <button onClick={props.changeTheme} className="d-flex align-items-center">
                    <img src={props.darkMode ? moonSolid : moonRegular} alt="" className="mx-2"/> 
                    { width >= 425 && 'Dark Mode'} 
                </button>
            </div>           
        </div>
    )
}
export default Head;