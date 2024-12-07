export default function AboutMe() {
	return (
      <div>

            {/*Logo Start*/}
            <div className="about-img">
            <img 
            src="images/Me.jpg"
            alt = "Me_img"
            />
            </div>
            {/*Logo End*/}

              




            {/*Intro Section Start*/}
            <div class="intro">
                <h1>Arisha Ghaffar</h1>
            <div className = "intro_p">
                <p>Hi! I'm Arisha, an experienced web developer focused on creating dynamic, user-centric web applications. I'm well versed in  front-end technologies and strive to deliver responsive, high-quality digital solutions. I am constantly learning new tools and technologies to push the boundaries of web development and create great online experiences.
                </p>
            </div>

                <button>Hire Me</button>
                <button>
                  <a href = "https://milestone01-rosy.vercel.app/" target = "blank">
                        Download CV
                  </a>
                </button>
            </div>
            {/*Intro Section End*/}



            


            {/*About Section Start*/}
            <div className="about-container">
                         <h1>About Me</h1>
            <div className = "about_p">
                <p>I'm an experienced web developer focused on creating dynamic, user-centric web applications. I'm well versed in  front-end technologies and strive to deliver responsive, high-quality digital solutions. I am constantly learning new tools and technologies to push the boundaries of web development and create great online experiences.
                <p>
                    I am committed to continuously learning and adopting the latest advancements in web technologies to create intuitive and engaging web applications. With a detail-oriented approach, I strive to deliver high-quality results on every project, whether working alone or in a team, always pushing the boundaries of what's possible to make a lasting impact online.
                </p>
                </p>
            </div>
            </div>
            {/* About Section Start*/}

      </div>
 );
}
