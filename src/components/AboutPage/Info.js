import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpg';

export default function Info() {
  return (
    <section className="py-5">
      
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img 
              src={aboutBcg} 
              className="img-fluid img-thumbnail" 
              alt="about company" 
              // style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">Optical connections between computer components will allow data to be transmitted faster than modern electronic ones, and over long distances. It is already about transferring data in electronic connections with terabit speed.</p>

            <p className="text-lead text-muted my-3">Chronic heart failure (CHF) - a pathological condition of the body, allocated in a separate disease accompanied by deficiency of blood supply to tissues and organs in the body. The major manifestations of the disease are breathlessness and decreased physical activity.</p>

            <button 
              className="main-link" 
              type="button"
              style={{
                marginTop: "2rem"
              }}
              >
                more info
            </button>
          </div>
          
        </div>
      </div>

    </section>
  )
}