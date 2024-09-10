import { useState } from 'react';
import Image from 'next/image';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Spinner from '@/app/components/spinner';
function Catalogue() {
    const [b2bShow, setB2bShow] = useState(false);
    //const [dealerShow, setDealerShow] = useState(false);
	const [formData, setFormData] = useState({
		name: '',      
		email: '',
		phone: '',
		companyName: '',
		countryName: '',
		message: ''
	});
  
	const [submitting, setSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(null);
	const [isError, setIsError] = useState(null);
	const handleInputChange = (e) => {    
	  const { name, value } = e.target;
	  setFormData({
		...formData,
		[name]: value
	  });
	  if (isSuccess === true) {
		setIsSuccess(false);
	  }
	  if (isError === true) {
		setIsError(false);
	  }
	}
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
		setSubmitting(true);
  
		// send email
		const response = await fetch('/api/catalogue-inquiry', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		  },
		  body: JSON.stringify(formData)
		});
  
		const { success, error } = await response.json();
  
		if (success) {
		  setIsSuccess(true);
		  //alert('Your inquiry has been submitted!');
		} else if (error) {
		  console.error(error);
		  setIsError(true);
		  //alert('Error while submitting your inquiry: ', error);
		}
		setSubmitting(false);
		e.target.reset();
	}
    return (
      <>
	  <button className="view-job-offers-link position-relative" onClick={() => setB2bShow(true)}>Download E-Catalogue</button>
	  <Modal
          size="fullscreen"
          show={b2bShow}
          onHide={() => setB2bShow(false)}
          className='e-catalogue-model'
        >
          <Modal.Header closeButton>
             
          </Modal.Header>
          <Modal.Body className='form-white'>
			<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-12">
								<h2 className="modal-title" id="exampleModalLabel">Fill the form to download E-Catalogue</h2>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<div className="form-floating">
										<input type="text" autoComplete="off" className="form-control" required id="name" name="name" placeholder="Name" onChange={handleInputChange} />
										<label htmlFor="name"><strong>Name</strong></label>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<div className="form-floating">
										<input type="email" autoComplete="off" className="form-control" required id="email" name="email" placeholder="Email" onChange={handleInputChange} />
										<label htmlFor="floatingEmail"><strong>Email</strong></label>
									</div>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<div className="form-floating">
										<input type="text" autoComplete="off" className="form-control" id="phone" name="phone" placeholder="Phone" onChange={handleInputChange} />
										<label htmlFor="phone"><strong>Phone</strong></label>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<div className="form-group">
									<div className="form-floating">
										<input type="text" autoComplete="off" className="form-control" required id="companyName" name="companyName" placeholder="Company Name" onChange={handleInputChange} />
										<label htmlFor="companyName"><strong>Company Name</strong></label>
									</div>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-12">
								<div className="form-group">
									<div className="form-floating">
										<input type="text" autoComplete="off" className="form-control" required id="countryName" name="countryName" placeholder="Country" onChange={handleInputChange} />
										<label htmlFor="countryName"><strong>Country</strong></label>
									</div>
								</div>
							</div>
						</div>
						<div className="row form-row">
							<div className="col-12">
								<div className="form-group">
									<div className="form-floating">
										<textarea autoComplete="on" className="form-control" required id="message" name="message" placeholder="Message" onChange={handleInputChange}></textarea>
										<label htmlFor="message"><strong>Message</strong></label>
									</div>
								</div>
							</div>
						</div>
						<div className="row form-row">	
							<div className="col-12">
								{submitting  === false && <button type="submit" className="view-job-offers-link position-relative send-btn">Send Request</button>}
								{submitting  === true && <button type="button" className="position-relative send-btn">Submitting... <Spinner></Spinner></button>}
							</div>
							<div className="col-12 message">
								<div className='ps-3'>
								{isSuccess === true && <h3 className="text-light-green">Your E-Catalogue Download Request has been submitted!<br/> We shall get back to you soon... </h3>}
								{isError === true && <h3 className="text-danger">Error while submitting your E-Catalogue Enquiry</h3>}
								</div>
							</div>
						</div>
					</form>
					{/* <div className="row form-row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<Form.Floating className="form-floating">
									<Form.Control type="text" className="form-control" id="floatingName" placeholder="Name"/>
									<label htmlFor="floatingName">Name</label>
								</Form.Floating>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<Form.Floating className="form-floating">
									<Form.Control type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
									<label htmlFor="floatingEmail">Email</label>
								</Form.Floating>
							</div>
						</div>
					</div>
					<div className="row form-row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<Form.Floating className="form-floating">
									<Form.Control type="text" className="form-control" id="floatingPhone" placeholder="Phone"/>
									<label htmlFor="floatingPhone">Phone</label>
								</Form.Floating>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="form-group">
								<Form.Floating className="form-floating">
									<Form.Control type="text" className="form-control" id="floatingCompany" placeholder="Company Name"/>
									<label htmlFor="floatingCompany">Company Name</label>
								</Form.Floating>
							</div>
						</div>
					</div>
					<div className="row form-row">
						<div className="col-12">
							<div className="form-group">
								<Form.Floating className="form-floating">
									<Form.Control type="text" className="form-control" id="floatingCompany" placeholder="Country"/>
									<label htmlFor="floatingCompany">Country</label>
								</Form.Floating>
							</div>
						</div>
					</div>
					<div className="row form-row">
						<div className="col-12">
							<div className="form-group">
								<Form.Floating className="form-floating">
								<Form.Control as="textarea" className="form-control" rows="1" id="floatingMessage" placeholder="Message"/>
									<label htmlFor="floatingMessage">Message</label>
								</Form.Floating>
							</div>
						</div>
					</div>
					<div className="row form-row">	
						<div className="col-12">
							<div className="form-group">
								<button className="view-job-offers-link position-relative send-btn">Send</button>
								 
							</div>
						</div>
					</div> */}
				</div>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default Catalogue;