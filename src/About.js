import './About.css';

export default function About(){
    const me = "https://i.ibb.co/3TzN1Qj/skye-blue.png";

    return(
        <div className="aboutWrapper">
            <img className="memoji" src={me} alt="Erica D. Perkins"/>
            <p className="about">
                Hello, my name is <strong>Erica Dorothy Perkins</strong>. I am a <strong>full-stack </strong>developer.
                Thanks for visiting my website.<span className="aboutSM"> I'd like to tell you a little about what I do.</span> In addition to LAMP [<strong>Linux, Apache, MySQL, PHP</strong>] and Java development, 
                I am also experienced in <strong>Algorithms</strong>, Big-O notation, <span className="aboutSM"> database design,
                database development, </span> <strong>data structures</strong>,
                hosting, and <strong>version control</strong>. View my resume <a href="https://docs.google.com/document/d/1bP5BBi1h9omxbJ8yGXH7uDl6TKkoBbo6mqTAhjy-xiA/edit?usp=sharing" target="_blank" className="about-link"><em><strong>here</strong></em></a>, and my Java certification <a href="https://www.codecademy.com/profiles/ericadperkins/certificates/d3f89367b558583e361640f778191345" target="_blank" className="about-link"><em><strong>here</strong></em></a> [issued by <strong>codecademy<sup>&reg;</sup></strong>] .
            </p>
        </div>
    );
}