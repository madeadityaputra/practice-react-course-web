import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
	return (
		<div className='footer py-5 '>
			<Container className='  justify-content-between '>
				<Row>
					<Col lg='5'>
						<h3 className=' fw-bold '>Ngoding.</h3>
						<p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eveniet vel officiis beatae iure debitis voluptatibus harum iste necessitatibus possimus.</p>
						<div className='no mb-1 mt-4 '>
							<Link>
								<i className='fa-brands fa-whatsapp'></i>
								<p className='m-0'> +81 123-4566-2345 </p>
							</Link>
						</div>
						<div className='mail'>
							<Link>
								<i className='fa-regular fa-envelope'></i>
								<p className=' m-0'>person-email@gmail.com</p>
							</Link>
						</div>
					</Col>
					<Col className=' d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
						<h5 className='fw-bold'>Menu</h5>
						<Link to=''>Home</Link>
						<Link to='kelas'>Kelas</Link>
						<Link to='testimonial'>Testimonial</Link>
						<Link to='faq'>FAQ</Link>
						<Link to='syaratketentuan'>Syarat & Ketentuan</Link>
					</Col>
					<Col lg='4' className=' mt-lg-0  mt-5'>
						<h5 className='fw-bold mb-3 '>Subscribe Untuk Info Menarik</h5>
						<div className='subscribes'>
							<input type='text' placeholder='Subscribe...' />
							<button className='btn btn-danger rounded-end rounded-0'>Subscribe</button>
						</div>
						<div className='social mt-3 '>
							<i className='fa-brands fa-facebook'></i>
							<i className='fa-brands fa-twitter'></i>
							<i className='fa-brands fa-linkedin'></i>
							<i className='fa-brands fa-github'></i>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className=' text-center px-md-0 px-3  '>
							&copy; Copyright {new Date().getFullYear()} By <span className=' fw-bold '>Made Aditya Putra</span> , All Right Reserved
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterComponent;
