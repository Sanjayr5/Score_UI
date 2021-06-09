import React from 'react';
import { Container } from 'react-bootstrap';
import HomePage from './components/HomePage';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
      <HashRouter>
      {/* <Header/> */}
        <Container>
          <Route path = '/' component={HomePage} exact />
        </Container>
        <br />
      </HashRouter>
    
  );
}
// import './App.css';
// import Doughnut from './charts/Doughnut';
// import { Card, Row, Col } from 'react-bootstrap';
// import MathFunctions from './components/MathFunctions';
// import scores from './components/scores';

// function App() {
//   const avg = (scores / scores.length) * scores.length;
//   console.log({scores});
//   console.log({avg})
//   return (
//     <div className="justify-content-end">
//       <Row>
//             <Col sm={12} md={6} lg={4}>
//                 <Card class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
//                 <Card.Body>
//                     <Card.Text>
//                       <Doughnut />
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             </Col>
//             <Col sm={12} md={6} lg={4}>
//                 <Card class="card border-primary mb-3" style={{maxWidth: '18rem'}}>
//                 <Card.Body>
//                     <Card.Text>
//                       {avg}
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//             </Col>
//       </Row>
      
//     </div>
        
//   );
// }

export default App;
