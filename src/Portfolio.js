import './Portfolio.css';

export default function Portfolio(){
    const i = {
        brb: "https://i.ibb.co/km490jj/folio-barbershop.png",
        edc: "https://i.ibb.co/qmWKP1Y/folio-education.png",
        gbg: "https://i.ibb.co/qdDMxv3/folio-gbg.png",
        img: "https://i.ibb.co/XCRsjBQ/folio-imagex.png",
        net: "https://i.ibb.co/PW8qk19/folio-netflix.png",
        foo: "https://i.ibb.co/ZGZ0W0s/folio-foodie.png",
        stu: "https://i.ibb.co/XZK5bdW/folio-studio.png"
    }

    return(
        <div className="portfolio">
            <div className="portfolioFlex">
                <div className="portfolioSmHead">
                    <p className="late">Latestest Projects</p>
                </div>
                <div className="portfolioItem">
                    <img src={i.brb} className="ifolio" alt="folio item" />
                    <p className="afolio">
                        <a href="http://barbershop.ericadperkins.com" rel="noreferrer" target="_blank" className="web">Webiste</a>
                        <a href="http://github.com/ericadperkins" rel="noreferrer" target="_blank" className="git">GitHub</a>
                    </p>
                </div>
                <div className="portfolioItem">
                    <img src={i.net} className="ifolio" alt="folio item" />
                    <p className="afolio">
                        <a href="http://netflix.ericadperkins.com" rel="noreferrer" target="_blank" className="web">Webiste</a>
                        <a href="http://github.com/ericadperkins/netflix-clone" rel="noreferrer" target="_blank" className="git">GitHub</a>
                    </p>
                </div>
                <div className="portfolioItem">
                    <img src={i.gbg} className="ifolio" alt="folio item" />
                    <p className="afolio">
                        <a href="http://gbgthelabel.com" rel="noreferrer" target="_blank" className="web">Webiste</a>
                        <a href="http://github.com/ericadperkins" rel="noreferrer" target="_blank" className="git">GitHub</a>
                    </p>
                </div>
                <div className="portfolioItem">
                    <img src={i.stu} className="ifolio" alt="folio item" />
                    <p className="afolio">
                        <a href="http://homestudiobuilds.co" rel="noreferrer" target="_blank" className="web">Webiste</a>
                        <a href="http://github.com/ericadperkins" rel="noreferrer" target="_blank" className="git">GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    );
}