export default function Header() {
	return (
    <div>
           
      {/* Navbar Section Start */}     
      <div className = "nav-container">
       <div className = "nav_h1">
          <h1>Arishay</h1> 
       </div>

      <nav className = "nav-items">
              <li><a href = "/">Home</a></li>
              <li><a href = "/about_me">About</a></li>
              <li><a href = "/experties">Expertise</a></li>
              <li><a href = "/projects">Projects</a></li>
              <li><a href = "/contact_us">Contact</a></li>
      </nav>  
      </div>  
      {/* Navbar Section End */}     
 

    </div>

 );
}