

import React, {useRef} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as MenimQaydalarim from 'yup';
import emailjs from "@emailjs/browser"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const ilkinDeyerler = {
    ad: '',
    ePoct: '',
   
  };

  const qaydalarSxemi = MenimQaydalarim.object().shape({
    ad: MenimQaydalarim.string().required('Ad sahesi bos buraxila bilmez').matches(/^[a-zA-Z\s]{3,55}$/, 'Ad sahəsi minimum 3, maksimum 55 simvoldan ibarət olmalıdır.'),
    ePoct: MenimQaydalarim.string().required('Elektron poct bosh buraxila bilmez').email('Elektron poçtu düzgün daxil edin.'),
  
  });


  const formElementi = useRef()
  const handleSubmit = async () => {
    try {
      await emailjs.sendForm('service_3rslb7r', 'template_76chjoc', formElementi.current, {publicKey: "user_XSVgRv73Ciboc6WRBgZW2"})
      toast.success('Mesaj ugurla gonderildi');
      formElementi.current.reset()
    } catch (error) {
      console.error('Mesaj gonderilmedi', error);
      toast.error('Mesaj gonderilen zaman xeta yarandi');
    } 
  };

  return (
    <div className='d-flex justify-content-center mt-5 py-5'>
      <Formik
        initialValues={ilkinDeyerler}
        validationSchema={qaydalarSxemi}
        onSubmit={handleSubmit}
      >
      {
      ({isSubmitting}) => (
        <Form ref={formElementi} className='form bg-dark p-5'>
        <h6 className='text-white h3'>Get in touch</h6>
        <p className='form-paraqraf my-3'>Describe your issue below. Our manager will contact you as soon as possible.</p>
        <div className="form-group">
          <Field type="text" name="ad" placeholder='Name' className='form-control bg-transparent border-0 rounded-0 border-bottom text-white shadow-none' />
          <ErrorMessage name='ad' component="div" className='text-danger mb-2'  />
        </div>
        <div className="form-group">
          <Field type="email" name="ePoct" placeholder='Email' className=' text-white form-control my-3 rounded-0  bg-transparent border-0 border-bottom shadow-none' />
          <ErrorMessage name='ePoct' component="div" className='text-danger mb-2'  />
        </div>
        <div className="form-group">
          <Field as="textarea" placeholder="mesajınız" name="mesaj" cols="30" rows="6" className="form-control rounded-0 text-white bg-transparent border-0 border-bottom shadow-none" />
        </div>
        <div className="button d-flex justify-content-center mt-4">
          <button disabled={isSubmitting} type='submit' className='send-btn'>Send</button>
        </div>
         </Form>
      )
       
      }
      </Formik>

      <ToastContainer />
    </div>
  )
}

export default ContactForm;



