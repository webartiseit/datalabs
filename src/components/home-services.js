import Accordion from 'react-bootstrap/Accordion';

function HomeServices() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Data Integration</Accordion.Header>
        <Accordion.Body>
            Seamlessly bring together data from various sources, making it accessible and valuable for analysis.
            <a href="/data-integration" className='d-block'>Learn More</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>ETL (Extract, Transform, Load)</Accordion.Header>
        <Accordion.Body>
            Transform raw data into meaningful insights through our ETL processes.
            <a href="/etl" className='d-block'>Learn More</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Data Warehousing</Accordion.Header>
        <Accordion.Body>
            Design, implement, and manage data warehouses for efficient storage and retrieval.
            <a href="/data-werehousing" className='d-block'>Learn More</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Big Data Processing</Accordion.Header>
        <Accordion.Body>
            Handle large volumes of data efficiently with our big data processing solutions.
            <a href="/big-data-processing" className='d-block'>Learn More</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Data Pipeline Development</Accordion.Header>
        <Accordion.Body>
            Create robust data pipelines for real-time data processing and analysis.
            <a href="/data-pipeline-development" className='d-block'>Learn More</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Data Governance</Accordion.Header>
        <Accordion.Body>
            Ensure data security, compliance, and quality with our data governance services.
            <a href="/data-governance" className='d-block'>Learn More</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default HomeServices;