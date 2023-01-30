import 'font-awesome/css/font-awesome.min.css';
import '../styles/contact.css';

function Contact(){

    return(
        <div id="contact" className="pages">
            <h1>Get In Touch</h1>
            <p>I'm Actively looking for any new opportunities, in full-stack web development.</p>
            <div className="links">
                <a id="contact-github" href="https://github.com/Arun-kumar-fw20-0202"><i className="fa fa-github"></i>GitHub</a>
                <a id="contact-linkedin" href="https://www.linkedin.com/in/arun-kumar-655989200/"><i className="fa fa-linkedin"></i>Linkdin</a>
                <a id="contact-email" href="https://mail.google.com/mail/u/0/#inbox?compose=new"><i className="fa fa-envelope"></i> arun07744@gmail.com</a>
                <a  id="contact-phone" href="#"><i className="fa fa-phone"></i> 7838557666</a>
            </div>
        </div>
    )
}

export default Contact