const Navbar = () => {
    return (
        <header className="navbar">
            <div style={{ display: "flex" }}>
                <img src="/images/logo.svg" alt="" className="logosvg" />
                <div className="navButtons">
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Collections</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Men</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Women</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">About</a>
                    <a href="https://www.youtube.com/watch?v=mMaBVfIedFw">Contact</a>
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