import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container" style={{width:"100%"}}>
        <div className="section-title">
          <h2>Our Past Recruitments</h2>
          <p>
           Companies that came in our campus thoughtout.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
