import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./ProjectCard"; 
import projImg1 from "../Navbar/assets/84f89a5abe3a18d4d3c5c672f00e76ce2943f0ca-1440x835.png"; 
import projImg2 from "../Navbar/assets/ImageProject2.png"; 
import projImg3 from "../Navbar/assets/ImageProject3.png"; 
 
import TrackVisibility from 'react-on-screen'; 
 
export const Projects = () => { 
 
  const projects = [ 
    { 
      title: "Business Startup", 
      description: "Design & Development", 
      imgUrl: projImg1, 
    },
    { 
      title: "Business Startup", 
      description: "Design & Development", 
      imgUrl: projImg2, 
    }, 
    { 
      title: "Business Startup", 
      description: "Design & Development", 
      imgUrl: projImg3, 
    }, 
  ]; 
 
  return ( 
    <section className="project" id="projects"> 
      <Container> 
        <Row> 
          <Col size={12}> 
            <TrackVisibility> 
              {({ isVisible }) => 
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}> 
                <h2>Projects</h2> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text.</p> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                  <Nav variant="pills" className="justify-content-center">

  <Nav.Item>
    <Nav.Link eventKey="first">Tab 1</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="second">Tab 2</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="third">Tab 3</Nav.Link>
  </Nav.Item>

</Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? 
"animate__animated animate__slideInUp" : ""}> 
                    <Tab.Pane eventKey="first"> 
                      <Row> 
                        { 
                          projects.map((project, index) => { 
                            return ( 
                              <ProjectCard 
                                key={index} 
                                {...project} 
                                /> 
                            ) 
                          }) 
                        } 
                      </Row> 
                    </Tab.Pane> 
                    <Tab.Pane eventKey="second"> 
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae 
blanditiis.</p> 
                    </Tab.Pane> 
                    <Tab.Pane eventKey="third"> 
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae 
blanditiis.</p> 
                    </Tab.Pane> 
                  </Tab.Content> 
                </Tab.Container> 
              </div>} 
            </TrackVisibility> 
          </Col> 
        </Row> 
      </Container> 
    
    </section> 
  ) 
} 