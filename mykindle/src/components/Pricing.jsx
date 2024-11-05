import React from "react";

export default function Pricing() {
    const pricing_data=[
        {
            plane_name:'STANDARD PLAN',
            price:15,
        },
        {
            plane_name:'PROFESSIONAL PLAN',
            price:25,
        },
        {
            plane_name:'EXCLUSIVE PLAN',
            price:45,
        },
    ]
  return (
    <div className="pricing">
      <h1>Our Pricing Plans</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever</p>
      <div className="plans">
        {
            pricing_data.map((p)=>(
                <div className="one_plan" key={p.price}>
                    <h2>{p.plane_name}</h2>
                    <span><span>$</span>{p.price}</span>
                    <hr />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button>ORDER NOW!</button>
                </div>
            ))
        }
      </div>
    </div>
  );
}
