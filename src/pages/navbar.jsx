import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(){

    return (
        <header>
            {/* <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a> */}
			<ul>
				<div class="menubx">
					<li><a href="#home">Home</a></li>
					<span class="line1"></span>
					<span class="line2"></span>
					<span class="line3"></span>
					<span class="line4"></span>
				</div>
				<div class="menubx">
					<li><a href="#about">About</a></li>
					<span class="line1"></span>
					<span class="line2"></span>
					<span class="line3"></span>
					<span class="line4"></span>
				</div>
				<div class="menubx">
					<li><a href="#projects">Projects</a></li>
					<span class="line1"></span>
					<span class="line2"></span>
					<span class="line3"></span>
					<span class="line4"></span>
				</div>
				<div class="menubx">
					<li><a href="#contact">Contact</a></li>
					<span class="line1"></span>
					<span class="line2"></span>
					<span class="line3"></span>
					<span class="line4"></span>
				</div>
			</ul>
        </header>
    )
}

export default Navbar