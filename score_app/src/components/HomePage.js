import React from 'react';
import Doughnut from '../charts/Doughnut';
import { Card, Row, Col } from 'react-bootstrap';
import scores from '../components/scores';
import Range_slider from '../charts/Range_slider';
import Topics from '../components/Topics';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from '../charts/ChangingProgressProvider';
import ProgressBar from '../charts/ProgressBar';

const percentile = require("percentile");
function HomePage() {
    const student = 5;
    const score = scores[student]
    const percentage = percentile(score, scores);
    var avg = () => {
        var scores_sum = scores.reduce((a, b) => a + b, 0);
        return scores_sum / scores.length;
    }
    return (
            <div className="justify-content-end">
                <br />
                <Row>
                    <Col md = {5}>
                    <Row>
                    <Card class="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                        <Card.Header>Your Score</Card.Header>
                        <Card.Body>
                            <Card.Text>
                              <Doughnut score= {score}/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Row>
                    <br/>
                    <Row>
                    <Card class="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                        <Card.Header>Percentile</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <ChangingProgressProvider valueStart={0} valueEnd={percentage}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
        </ChangingProgressProvider>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Row>       
                    </Col>
                    <Col md = {7}>
                        <Row>
                            <Col md = {12}>
                                <Card class="card border-primary mb-3">
                                <Card.Header>Your Position to Average of class</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Range_slider avg = {avg()} score = {score} />
                                        <ProgressBar score = {score} />
                                    </Card.Text>
                                </Card.Body>
                               </Card>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                        <Col md = {12}>
                    <Card>
                    <Card.Header>Topics you need to concentrate</Card.Header>
                    <Card.Body>
                        <Card.Text>
                                <Topics />
                        </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                            
                        </Row>
                    </Col>
                </Row>
              <br />
              
            </div>
                
          );
}
export default HomePage
