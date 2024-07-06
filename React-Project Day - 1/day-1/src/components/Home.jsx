function Home(){
    return(
        <div>

        <span className="header"><marquee behavior="scroll" direction="right"><h2>HEADER PAGE</h2></marquee></span>
            <ul className="nav">
                <li><a href=""> <img className="headimg" src="https://img.freepik.com/premium-vector/globe-planet-icon-sign-internet-global-sphere_250841-867.jpg"></img></a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Service</a></li>
                <li><button>Login</button></li>
            </ul>
        </div>
    )
}

export default Home