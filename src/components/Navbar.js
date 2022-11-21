const Navbar = () => {
    return (
        <header className="navbar">
            <div style={{ display: "flex" }}>
                <img src="/images/logo.svg" alt="" className="logosvg" />
                <div className="navButtons">
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img src="/images/icon-cart.svg" alt="" className="cartLogo" />
                <img src="/images/based.jpg" alt="" className="avatar" />
            </div>
        </header>
    );
}

export default Navbar;