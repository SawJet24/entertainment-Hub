import "./Header.css"

const Header = () => {
    return (
        <h4 onClick={()=> window.scroll(0,0)} className="header">Enjoy The Movie</h4>
    );
};

export default Header;
