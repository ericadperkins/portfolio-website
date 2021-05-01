import './Footer.css';

export default function Footer(){
    const k = {
        one: "https://i.ibb.co/m4qnBrk/iconli.png",
        two: "https://i.ibb.co/hyYZnXN/iconin.png",
        thr: "https://i.ibb.co/HCDtVjb/icontr.png",
        fou: "https://i.ibb.co/8P9gLCk/iconem.png"
    }

    return(
        <div className="smFooter">
            <a href="http://instagram.com/phpcodesupport" rel="noreferrer" target="_blank">
                <img src={k.one} class="icons" alt="instagram" />
            </a>
            <a href="http://linkedin.com/in/ericadperkins" rel="noreferrer" target="_blank">
                <img src={k.two} class="icons" alt="linkedin" />
            </a>
            <a href="http://twitter.com/ericadperkins_" rel="noreferrer" target="_blank">
                <img src={k.thr} class="icons" alt="twitter" />
            </a>
            <a href="mailto:edperkinsthe3rd@gmail.com" rel="noreferrer" target="_blank">
                <img src={k.fou} class="icons" alt="email" />
            </a>
        </div>
    );
}