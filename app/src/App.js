import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/gc_front_end_template.css';
import gcLogoEn from './sig-en-w.png';
import GanttChart from './components/GanttChart';
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
  NavItem
} from 'reactstrap';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

function App() {
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
          className=""
          >
          <Row>
            <Col>
              <GanttChart />
            </Col>
            <Col>
              <RadialBarBasic />
            </Col>
          </Row>
          <Row>
            <Col>
              <RadialBarMulti />
            </Col>
            <Col>
              <PieChart />
            </Col>
          </Row>
          <Row>
            <Col>
              <AreaChart />
            </Col>
          </Row>
          <Row>
            <Col>
              <Heatmap />
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
