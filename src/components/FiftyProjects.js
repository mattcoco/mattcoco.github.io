import { Col, Row } from 'react-bootstrap';
import projects from '../projectData';
import Project from './Project';

function FiftyProjects() {

  return (
    <div>
      <h1 className='text-center'>Componentes y widgets</h1>
      <Row>
        {projects.map(project => (
          <Col sm={12} md={6} lg={4} xl={3} key={project.key}>
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FiftyProjects;