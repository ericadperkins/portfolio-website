import './Navbar.css';

export default function Navbar(){
    var scrsz = window.screen.width;

    if(scrsz > 768){
        var logo = "https://i.ibb.co/QdVGzGJ/signature.png";
    }else{
        var logo = "https://i.ibb.co/P6pGYZp/signature-1.png";
    }

    return(
        <div className="navbar">
            <img src={logo} className="logo" alt="logo"/>
        </div>
    );
}