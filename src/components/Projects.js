import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Movie Recommendation Engine",
      description: "Implemented a content-based recommendation engine using Python, Jupyter Notebook & Streamlit",
      imgUrl: projImg1,
    },
    {
      title: "Career Website",
      description: " Designed a dynamic job portal with Flask, HTML, CSS, Bootstrap, and MySQL, empowering job seekers to apply and update applications, while allowing the admin to add, update, and delete job openings",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio Template",
      description: "Developed a responsive portfolio template using HTML, CSS, and JavaScript. The template is visually appealing, user-friendly, and features interactive elements to enhance the user experience. ",
      imgUrl: projImg4,
    },
    {
      title: "Calculator",
      description: "Full functioning calculator made using Html Css and Javascript. Used eval() to evaluate the result, added event listener for each buttons.",
      imgUrl: projImg5,
    },
    {
      title: "TicTacToe",
      description: "Build in C++. Gave both options : Player vs Player and Player vs Computer",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Exploring Innovation: Our Portfolio of Projects"<br></br>
"Crafting Excellence: A Showcase of Our Work"<br></br>
"Unveiling Creativity: Projects That Define Our Passion"<br></br>
"Turning Ideas into Reality: Our Project Portfolio"<br></br>
"Journey Through Our Endeavors: Highlighted Projects"</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                     
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
