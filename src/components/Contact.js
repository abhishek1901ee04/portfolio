import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import axios from 'axios';

const Contact = () => {
    const [data, setData] = useState({
        name:'',
        content:'',
        email:'',
        
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('https://portfolio-backend-dep.onrender.com/api/submit', data);
          
          // Check if the response status is successful (status code 2xx)
          if (response.status >= 200 && response.status < 300) {
            console.log('User added successfully:', response.data);
            setData({ name: '', email: '', content: '' });
          } else {
            console.error('Error adding user. Status:', response.status);
          }
        } catch (error) {
          console.error('Error adding user:', error);
        }
      };

    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Hire Me</p>
                    <p className='heading-text'>Get in Touch</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>I have a keen interest in pursuing opportunities within Software and full-stack development, with a particular enthusiasm for tackling ambitious and sizeable projects. My fascination lies in the intricate process of shaping ideas into functional software, and my curiosity is drawn to projects that demand innovation and scale. While my focus is on these domains, I'm also open to addressing any other queries or subjects. Please feel free to utilize the provided form for any further requests or questions you may have.</p>
                        </div>
                        <div className="contact-hello">
                            <p>Say Hello</p>
                            <Link className='hello-links' to="//wa.me/+918003826640" target='_blank'>wa.me/Abhishek </Link>
                            <a className='hello-links' href="mailto:abhitrivediee04@gmail.com" >abhitrivediee04@gmail.com</a>
                            <Link className='hello-links' to="//wa.me/+918003826640" target='_blank'>+91 8003826640</Link>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form
                            onSubmit={handleSubmit}
                            name="contact-form"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label type="name">Your Name</label>
                                <input
                                value={data.name}
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                                />
                            </div>

                            <div className="email">
                                <label type="email">Your Email</label>
                                <input
                               value={data.email}
                               onChange={handleInputChange}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label type="message">Your message</label>
                                <textarea
                                value={data.content}
                                onChange={handleInputChange}
                                type="text"
                                name="content"
                                id="message"
                                placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
