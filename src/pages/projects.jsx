import "../styles/projects.css"
import 'font-awesome/css/font-awesome.min.css';

function Projects (){
  return (

    <div id="projects" className="pages">
      <h1>Thing I've Developed</h1>
    <div className="card">
        <div className="imgBx">
          <img src="https://i.ibb.co/hDKzc84/Screenshot-20230103-054519.png" alt="" />
        </div>
        <div className="data">
          <h1>Clone of <span>"Bewakoof"</span></h1>
          <p>
            Online Shopping Made Hassle-Free, Convenient & Super-Exciting With Bewakoof.com. 
            Shop Now! All the Latest Trends are Just a Click Away! Easy Shopping, Secure Payments & Cool Offers. 
            Free Shipping. Cash on Delivery. 15 Day Return Policy. Easy Returns.
          </p>
          <div className="lang">
            <span>React</span>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Chakra UI</span>
          </div>
          
          <div className="links">
            <a href="https://github.com/Arun-kumar-fw20-0202/-giving-scene-667"><i className="fa fa-github"></i></a>
            <a href="https://clinquant-baklava-8aec62.netlify.app/"><i className="fa fa-external-link"></i></a>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="imgBx">
          <img src="https://i.ibb.co/JnXXCHY/Screenshot-20230103-054558.png" alt="" />
        </div>
        <div className="data">
          <h1>Clone of <span>"Bath and Body Care"</span></h1>
          <p>
            Sale items at 50% off on a wide range of body creams, scrubs, mist, shower gels and more. 
            Get first pick! Be the first to shop sale items at 50% off. Secured Payment. Easy Returns. 
            100% Original. Quick & Secure Checkout. Limited Period Offer. Reasonable Price.
          </p>
          <div className="lang">
            <span>React</span>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Chakra UI</span>
          </div>
          <div className="links">
            <a href="https://github.com/Arun-kumar-fw20-0202/Bath-Body-care/tree/main/bathbodycare"><i className="fa fa-github"></i></a>
            <a href="https://bathbodycare.vercel.app/"><i className="fa fa-external-link"></i></a>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Projects