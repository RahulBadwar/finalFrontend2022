import React from 'react';
import Header from './Header';



 function ContactComponent() {
  return (
   <div>
    <Header/>
     <section>
    <div class="row">
      <h2 class="section-heading">WE PROMISE TO DELIVER</h2>
    </div>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="icon-wrapper">
          <i class="fa fa-gift"></i>
          </div>
          <h3>UNMATCHED BENEFITS</h3>
          <p>
          We take care of your travel beyond ticketing by providing you with innovative and unique benefits.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="icon-wrapper">
         <i class="fa-solid fa-headphones"></i>
          </div>
          <h3>SUPERIOR CUSTOMER SERVICE</h3>
          <p>
          We put our experience and relationships to good use and are available to solve your travel issues.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="icon-wrapper">
          <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <h3>LOWEST PRICES</h3>
          <p>
          We always give you the lowest price with the best partner offers.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="icon-wrapper">
          <i class="fa-solid fa-headphones"></i>
          </div>
          <h3>Safe And Hygenic Vechiles</h3>
          <p>
           We give You Best Safe And Hygenic Vechiles
          </p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="icon-wrapper">
          <i class="fa-solid fa-location-crosshairs"></i>
          </div>
          <h3>Live Tracking</h3>
        <p>
           We give live tracking of your Journey.</p>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="icon-wrapper">
            <i class="fas fa-plug"></i>
          </div>
          <h3>Verified Driver and Vehicles </h3>
          <p>
           We Verified Driver as well as Vechiles.
          </p>
        </div>
      </div>
    </div>
  </section>
   </div>
  )
}
export default ContactComponent;

