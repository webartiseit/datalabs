import HomeServices from "../components/home-services";
import Layout from "../layout/layout"
import ServiceImg1 from'./../images/services1.jpg'
import PlayIcon from'./../images/play.png'
import Industry1 from'./../images/industry1.jpg'
import Industry2 from'./../images/industry2.jpg'
import Industry3 from'./../images/industry3.jpg'
import Industry4 from'./../images/industry4.jpg'
import Industry5 from'./../images/industry5.jpg'
import Industry6 from'./../images/industry6.jpg'
import Industry7 from'./../images/industry7.jpg'
import TrustedBy from'./../images/trustedby.jpg'
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
const Home =()=>{
    return(
        <>
        <Layout>
            <div className="mainbanner">
                <Container> 
                    <div className="banner-content">
                        <h1 className="mb-5">Welcome to Data Labs Corporation:<br/> Your Partner in Data Engineering Excellence</h1>
                        <p className="mb-5">At Data Labs Corporation, we understand that in today's data-driven world, the success of your business depends on your ability to harness the power of data. We specialize in data engineering services that empower organizations to collect, process, and utilize data effectively, enabling data-driven decision-making, improving operational efficiency, and driving innovation.</p>
                        <a href="/contact" className="btn btn-theme btn-lg" role="button">Contact Now</a>
                    </div>
                </Container>
            </div>
            <section className="services-sec py-5">
                <Container> 
                    <Row>
                        <Col md={5}>
                            <h2 className="title">OUR SERVICES</h2>
                            <p className="description">End-To-End Services for Developing Modern Datlasa Applications & AI</p>
                            <div className="divider1 mb-4"></div>
                            <HomeServices/>
                        </Col>
                        <Col md={7}>
                            <img src={ServiceImg1} className="w-100 ms-md-3" alt="Our Services"/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="whychoose-us">
                <Container> 
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <div className="h1 fw-semibold text-white py-5">Why Choose <br/>Data Labs Corporation?</div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={PlayIcon} alt="why choose us" className="icon"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="h5">Expertise</div>
                                    <p>Our team of highly skilled data engineers brings a wealth of experience and expertise to every project. We stay up-to-date with the latest industry trends and technologies to ensure that our clients receive the best solutions available.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={PlayIcon} alt="why choose us" className="icon"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="h5">Customized Solutions</div>
                                    <p>We understand that every organization is unique, which is why we offer customized data engineering solutions tailored to your specific requirements. Whether you need data integration, ETL (Extract, Transform, Load) processes, or data pipeline development, we've got you covered.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={PlayIcon} alt="why choose us" className="icon"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="h5">Scalability</div>
                                    <p>As your business grows, so do your data needs. Our scalable solutions are designed to evolve with your organization, ensuring that you can handle increasing data volumes and complexities without disruption.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={PlayIcon} alt="why choose us" className="icon"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="h5">Data Quality and Governance</div>
                                    <p>We prioritize data quality and governance to ensure that your data is accurate, consistent, and secure. Our robust data management practices and quality control measures guarantee that your data is reliable and compliant with industry regulations.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={PlayIcon} alt="why choose us" className="icon"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="h5">Efficiency</div>
                                    <p>We optimize data processes to maximize efficiency, reduce costs, and minimize data processing times. Our streamlined solutions empower your team to make faster, data-driven decisions.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img src={PlayIcon} alt="why choose us" className="icon"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="h5">Cutting-Edge Technologies</div>
                                    <p>Data Labs Corporation is at the forefront of data engineering technologies. We leverage the latest tools and platforms to deliver state-of-the-art solutions that give your business a competitive edge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="industies-home py-5">
                <Container> 
                    <div className="title mt-4 mb-2">INDUSTRIES WE COVER</div>
                    <h6 className="text-center fw-normal mb-2">Data Labs Corporation: Empowering Diverse Industries with Data Engineering Excellence</h6>
                    <p className="text-secondary  m-auto text-center">At Data Labs Corporation, we take pride in our ability to provide tailored data engineering services that cater to the unique needs of various industries. Our commitment to delivering cutting-edge solutions has allowed us to serve a diverse clientele, including but not limited to:</p>
                    <Row>
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry1} alt="Financial Services" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5">Financial Services</div>
                                    <p>In the highly regulated and data-intensive world of financial services, accurate and timely data processing is essential. We assist financial institutions with data integration, risk analysis, fraud detection, and compliance reporting to enable informed decision-making.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry2} alt="Financial Services" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5">Fast-Moving Consumer Goods (FMCG)</div>
                                    <p>In the FMCG sector, staying ahead of market trends and consumer preferences is crucial. We help FMCG companies optimize their supply chain, track inventory, and analyze sales data to ensure products are readily available when and where consumers demand them.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry3} alt="Financial Services" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5">Manufacturing</div>
                                    <p>Manufacturing companies rely on efficient data management to streamline production, reduce downtime, and maintain quality control. Our data engineering solutions support real-time monitoring, predictive maintenance, and production optimization.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry4} alt="Financial Services" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5"> Retail</div>
                                    <p>Retailers face the challenge of managing vast amounts of data from online and offline sales channels. Data Labs Corporation assists retailers in leveraging data for inventory management, customer analytics, and personalized marketing strategies.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry5} alt="Consumer Packaged Goods (CPG)" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5">Consumer Packaged Goods (CPG)</div>
                                    <p>CPG companies benefit from our data engineering services by optimizing demand forecasting, distribution logistics, and market analysis. We help them stay competitive in a fast-paced consumer market.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry6} alt="Financial Services" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5">Healthcare and Life Sciences</div>
                                    <p>In the healthcare and life sciences industries, data accuracy and security are paramount. We support healthcare providers, pharmaceutical companies, and research institutions with data integration, patient analytics, and clinical trial data management.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="industry-block shadow">
                                <img src={Industry7} alt="Financial Services" className="w-100"/>
                                <div className="industry-content">
                                    <div className="h5">Pharmaceuticals</div>
                                    <p>The pharmaceutical industry relies on data for drug discovery, clinical trials, and regulatory compliance. Our data engineering expertise aids pharmaceutical companies in managing and analyzing vast volumes of data critical to their success.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="trusted-by py-5">
                <div className="container">
                    <div className="text-center title">DATA LABS IS TRUSTED BY</div>
                    <img src={TrustedBy} className="w-100 mt-5" alt="Tusted by" />
                </div>
            </section>
            <section className="cat1">
                <Container> 
                    <Row>
                        <Col md={5}>
                            <div className="title">Take the next step<br/>with DATA LABS.</div>
                        </Col>
                        <Col md={7}>
                            <p>Learn how phData can help solve your most challenging data and AI problems.</p>
                            <a href="/contact" className="btn btn-theme btn-lg">TALK TO AN EXPERT</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
        </>
    )
}
export default Home;