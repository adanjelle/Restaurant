import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';
import ContactPage from '../../Components/ContactPage/ContactPage';

const ContactForm = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const numRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: numRef.current.value,
      message: messageRef.current.value
    };

    try {
      const response = await fetch('http://localhost:5000/UserDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
        numRef.current.value = '';
        toast.success('You have successfully submitted your details!');
      } else {
        toast.error('Failed to submit your details.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit your details.');
    }
  };

  return (
    <>
      <ContactPage />
      <div className="contact-container1">
        <section className="contact1">
          <form ref={formRef} className="form11" onSubmit={handleSubmit}>
            <h3>Get in Touch</h3>
            <div className="input-box">
              <label>Full Name*</label>
              <input
                type="text"
                className="field"
                name="name"
                placeholder="Enter your name"
                ref={nameRef}
                required
              />
            </div>
            <div className="input-box">
              <label>Email Address*</label>
              <input
                type="email"
                className="field"
                name="email"
                placeholder="Enter your email"
                ref={emailRef}
                required
              />
            </div>
            <div className="input-box">
              <label>Telephone*</label>
              <input
                type="text"
                className="field"
                name="phone"
                placeholder="Enter your phone"
                ref={numRef}
                required
              />
            </div>
            <div className="input-box">
              <label>Your Message*</label>
              <textarea
                className="field mess"
                name="message"
                placeholder="Enter your message"
                ref={messageRef}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="btn form-button">
                Send Message
              </button>
            </div>
          </form>
        </section>
        <section className="contact-info">
          <div className="info-box">
            <h3>Equity Branch</h3>
            <p>Physical Address: Grand Osis Garden, off Mandera Road, Wajir, Kenya</p>
            <p>Tel: +254-727-774164</p>
            <p>Opening Hours: 9am-11pm</p>
            <p>Current Opening Hours: 9am-10pm</p>
          </div>
          <div className="info-box">
            <h3 className='heado'>Equity Bank</h3>
            <p>Physical Address: Equity Complex–off Orahey Avenue, Wajir, Kenya</p>
            <p>Tel: +254-743-913843</p>
            <p>Opening Hours: 6.30am-4pm</p>
            <p>Current Opening Hours: Temporarily Closed</p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
