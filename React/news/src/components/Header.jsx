import "./Header.css"
function Header(){
    return (
        <div class="nav">
            <div id="logo">
                <img src="./" alt="newslogo">
                </img>
                </div>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#aboutus">ABOUT US</a></li>
                    <li><a href="#trending">TRENDING</a></li>
                    <li><a href="#horoscope">HOROSCOPE</a></li>
                </ul>
        </div>
    )
}

export default Header;