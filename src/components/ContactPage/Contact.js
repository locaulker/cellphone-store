import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">

          <Title title="contact us" />

          <form action="https://formspree.io/mrggornr" method="POST" className="mt-5">
            <div className="form-group">
              <input type="text" name="firstName" className="form-control" placeholder="Enter Your Full Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="email@email.com" />
            </div>
            <div className="form-group">
              <input type="text" name="subject" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-control" rows="10" placeholder="Your brief Message goes here"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message" className="form-control btn btn-outline-info"/>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
