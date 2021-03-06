import React from 'react';
import Board from 'react-trello'
import './css/App.css';
import './css/gc_front_end_template.css';
import gcLogoEn from './sig-en-w.png';
import member1 from './img/member1.png';
import member2 from './img/member2.png';
import member3 from './img/member3.png';
import member4 from './img/member4.png';
import GanttChart from './components/GanttChartMulti';
import RadialBarBasic from './components/RadialBarBasic';
import RadialBarMulti from './components/RadialBarMulti';
import Heatmap from './components/Heatmap';
import AreaChart from './components/AreaChart';
import PieChart from './components/PieChart';
import { Container, Row, Col } from 'reactstrap';
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Badge
} from 'reactstrap';


function App() {

  const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Unassigned',
      label: '3/10',
      cards: [
        {id: 'Card10', title: 'Task 10', description: 'Analysis: clean data, extract it, and do more data-scienc-y things', label: 'Priority: High'},
        {id: 'Card9', title: 'Task 9', description: 'Development: refactor application layer code ', label: 'Priority: Low'},
        {id: 'Card8', title: 'Task 8', description: 'Marketing: make some more word salad for this kanban board', label: 'Priority: Medium'}
      ]
    },
    {
      id: 'lane2',
      title: 'To Do',
      label: '2/10',
      cards: [
        {id: 'Card7', title: 'Task 7', description: 'Development: add Scrollable to main Component or something', label: 'Priority: Medium'},
        {id: 'Card6', title: 'Task 6', description: 'Design: redo everything', label: 'Priority: Low'}
      ]
    },
    {
      id: 'lane3',
      title: 'In Progress',
      label: '4/10',
      cards: [
        {id: 'Card5', title: 'Task 5', description: 'Development: refactor to make this app actually functional', label: 'Priority: Low'},
        {id: 'Card4', title: 'Task 4', description: 'Development: connect to Firebase API', label: 'Priority: High'},
        {id: 'Card3', title: 'Task 3', description: 'Deployment: upload to Digital Ocean droplet', label: 'Priority: High'},
        {id: 'Card2', title: 'Task 2', description: 'Analysis: meet with stakeholders to review requirements', label: 'Priority: Low'}
      ]
    },
    {
      id: 'lane4',
      title: 'Completed',
      label: '1/10',
      cards: [
        {id: 'Card1', title: 'Task 1', description: 'Design: create wireframes, colour palette, font set', label: 'Priority: High'},
      ]
    }
  ]
}
  return (
    <React.Fragment>
      <Navbar className="shadow-sm nav-bg">
        <div className="h-100 directory-fip">
              <img src={gcLogoEn} alt="Government of Canada" />
            </div>
            <NavbarBrand href="/" className="directory-brand">
              <span>GC Mission Critical</span>
            </NavbarBrand>
            <Nav className="ml-auto">
              <NavItem>
                <Button color="light">
                  Language
                </Button>
              </NavItem>
            </Nav>
      </Navbar>
      <main>
        <Container
          className="outer-container"
          >
          <Row>
            <h1> CANDEV Data Challenge </h1>
          </Row>
          <Row>
            <img src={member1} className="member-icon"/>
            <img src={member2} className="member-icon"/>
            <img src={member3} className="member-icon"/>
            <img src={member4} className="member-icon"/>
          </Row>
          <Row>
            <h5>
              <Badge color="secondary" className="badge">#TBS</Badge>
              <Badge color="secondary" className="badge">#gccollab</Badge>
              <Badge color="secondary" className="badge">#data visualization</Badge>
              <Badge color="secondary" className="badge">#project management</Badge>
              <Badge color="secondary" className="badge">#React</Badge>
              <Badge color="secondary" className="badge">#Node</Badge>
              <Badge color="secondary" className="badge">#Firebase</Badge>
            </h5>
          </Row>
          <Row>
          </Row>
            <br/>
          <Row>
            <Col>
              <div className="justify-center">
                <h5>Project Timeline</h5>
              </div>
              <GanttChart />
            </Col>
            <Col>
              <div className="justify-center">
                <h5>Team Contributions</h5>
              </div>
              <AreaChart />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="justify-center">
                <h5>Current Progress</h5>
              </div>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col xs="1">
            </Col>
            <Col xs="3">
              <RadialBarBasic />
            </Col>
            <Col xs="3">
              <RadialBarMulti />
            </Col>
            <Col xs="auto">
              <PieChart />
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="justify-center">
                <h5>Task Completion Timeline by Priority</h5>
              </div>
              <Heatmap />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="justify-center">
                <h5>Kanban Board</h5>
              </div>
              <Board
                data={data}
                style={{backgroundColor: '#024571'}}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
