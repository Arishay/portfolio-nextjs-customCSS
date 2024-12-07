export default function Projects() {
	return (

     <div>
        
          {/*Project Section Start */}
          <h1 className="project_h1">Projects</h1>


          {/*Project Section_01 */}
          <div className = "project-container_01">
          <div className = "project_items_01">
             <img
              src = "images/pizzeria.jpg"
              alt = "project_img"
              />
             <h2><a href="https://nextjsweb1-six.vercel.app/" target="blank">pizzeria</a></h2>      
          </div>



          <div className = "project_items_01">
            <img 
              src = "images/project_01.jpg"
              alt = "project_img"
              />
            <h2><a href="https://nextjsweb2-wheat.vercel.app/" target="blank">Educational Website</a></h2>
            </div>
          </div>


            

          {/*Project Section_02 */}
          <div className = "project-container_02">
          <div className = "project_items_02">
            <img 
              src = "images/perport.jpg"
              alt = "project_img"
            />
            <h2><a href="https://personal-portfolio-nextjs-liart.vercel.app/" target="blank">personal portfolio</a></h2>
          </div>

          <div className = "project_items_02">
            <img 
              src = "images/resumebuilder.jpg"
              alt = "project_img"
            />
            <h2><a href="https://milestone4-gilt.vercel.app/" target="blank">Resume Builder</a></h2>
          </div>
          </div>

          {/*Project Section End */}
        







     </div>

  );
}