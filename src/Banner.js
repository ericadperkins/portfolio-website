import './Banner.css';

export default function Banner(){
    return(
        <div className="banner">
            <div className="overlay">
                <p className="bannerSubtext">Full-Stack Development <span className="smblock">•</span> Databases <span className="smblock">•</span> API Integration</p>
            </div>
        </div>
    );
}