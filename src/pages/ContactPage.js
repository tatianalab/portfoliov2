import React from 'react';
import * as emailjs from 'emailjs-com';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import Form from 'react-bootstrap/Form';

import './ContactPage.css';

class ContactPage extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      name: "",
      subject:"",
      email: "",
      message:"",
      emailSent:null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_64la3dm', 'template_qf91iyo','.contact-form','user_eZC4b4nANEXPZwpXJw4VO')
      .then((result) => {
        if(result.text === "OK"){
          this.setState({
            name: "",
            subject:"",
            email: "",
            message:"",
            emailSent:true
          })
        }else {
          this.setState({
            emailSent:false
          })
        }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  render(){
    return(
      <div>
      <div className="home-hero-container">
      <Nav/>
      <Hero title={this.props.title} text={this.props.text} />
      </div>
      <Form onSubmit={this.handleSubmit.bind(this)}
       className="contact-form"
      >
      <Form.Group className='form-inputs'>
      <Form.Label className='form-label' >Name:</Form.Label>
      <Form.Control className='form-input' type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group className='form-inputs'>
      <Form.Label className='form-label'htmlFor="email">Email:</Form.Label>
      <Form.Control className='form-input' type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group className='form-inputs'>
      <Form.Label className='form-label'>Subject:</Form.Label>
      <Form.Control className='form-input' type="text" name="subject" id="subject" value={this.state.subject} onChange={this.handleChange} />
      </Form.Group>

      <Form.Group className='form-inputs'>
      <Form.Label className='form-label'>Message:</Form.Label>
     <Form.Control as="textarea" rows="5" className='form-input'  name="message" id="message" value={this.state.message} onChange={this.handleChange} />
      </Form.Group>

        <button className='form-input-btn' type='submit'>
          SEND!
        </button>
        {this.state.emailSent === true && <p className="d-inline success-msg">Message Sent!</p>}
        {this.state.emailSent === false && <p className="d-inline err-msg">Message Not Sent- try again</p>}
      </Form>
      </div>
      )


  }
}

export default ContactPage;

