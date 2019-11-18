import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaMoneyBillWave, FaLock} from 'react-icons/fa';


export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: 'free shipping',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet?'
      },
      {
        id: 2,
        icon: <FaMoneyBillWave />,
        title: '30-day return policy',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet?'
      },
      {
        id: 3,
        icon: <FaLock />,
        title: 'Secured Payment',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet?'
      }
    ]
  }

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
        <h1 className="text-center">Services</h1>
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div className="col-10 mx-auto col-sm-6 col-md-4 my-3" key={item.id}>
                  <div className="service-icon text-center">{item.icon}</div>
                  <div className="mt-3 text-capitalize text-center">{item.title}</div>
                  <div className="mt-3">
                    {item.text}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </ServicesWrapper>
    )
  }
}

const ServicesWrapper = styled.section`
  /* background: rgba(95, 183, 234, 0.1); */

  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);

    p {
      color: var(--darkGrey);
    }
  }
`;