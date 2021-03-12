import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

const displayOutput = (age) => {
  let outputDiv = $("div#output");
  let htmlForOutputDiv = `<p>Giving new meaning to "age is just a number"...</p>
  <ul>
    <li>Your age on Earth is ${age.getEarthAge().toFixed(1)} years</li>
    <li>Your age on Mercury is ${age.getMercuryAge().toFixed(1)} years</li>
    <li>Your age on Venus is ${age.getVenusAge().toFixed(1)} years</li>
    <li>Your age on Mars is ${age.getMarsAge().toFixed(1)} years</li>
    <li>Your age on Jupiter is ${age.getJupiterAge().toFixed(1)} years</li>
  </ul>
  <p>Keeping in mind that the future is, as yet, unknowable...</p>`;
  // if (Math.sign(age.getEarthYearsRemaining()) === 1) {
  //   htmlForOutputDiv += `<li>You have an estimated ${age.getEarthYearsRemaining()} years remaining on Earth</li>`;
  // } 
  // else if (Math.sign(age.getEarthYearsRemaining()) === -1) {
  //   htmlForOutputDiv += `<li>Proving how unknowable the future is, you have lived ${age.getEarthYearsRemaining()} years past your life expectancy on Earth</li>`;
  // } else if (Math.sign(age.getEarthYearsRemaining()) === 0) {
  //   htmlForOutputDiv += `<li>Don't read too much into this, but you have lived your exact life expectancy on Earth.</li>`;
  // } if (Math.sign(age.getMercuryYearsRemaining()) === 1) {
  //   htmlForOutputDiv += `<li>You have an estimated ${age.getMercuryYearsRemaining()} years remaining on Mercury</li>`;
  // } else if (Math.sign(age.getMercuryYearsRemaining()) === -1) {
  //   htmlForOutputDiv += `<li>Proving how unknowable the future is, you have lived ${age.getMercuryYearsRemaining()} years past your life expectancy on Mercury</li>`;
  // } else if (Math.sign(age.getMercuryYearsRemaining()) === 0) {
  //   htmlForOutputDiv += `<li>Don't read too much into this, but you have lived your exact life expectancy on Mercury.</li>`;
  // } if (Math.sign(age.getVenusYearsRemaining()) === 1) {
  //   htmlForOutputDiv += `<li>You have an estimated ${age.getVenusYearsRemaining()} years remaining on Venus</li>`;
  // } else if (Math.sign(age.getVenusYearsRemaining()) === -1) {
  //   htmlForOutputDiv += `<li>Proving how unknowable the future is, you have lived ${age.getVenusYearsRemaining()} years past your life expectancy on Venus</li>`;
  // } else if (Math.sign(age.getVenusYearsRemaining()) === 0) {
  //   htmlForOutputDiv += `<li>Don't read too much into this, but you have lived your exact life expectancy on Venus.</li>`;
  // } if (Math.sign(age.getMarsYearsRemaining()) === 1) {
  //   htmlForOutputDiv += `<li>You have an estimated ${age.getMarsYearsRemaining()} years remaining on Mars</li>`;
  // } else if (Math.sign(age.getMarsYearsRemaining()) === -1) {
  //   htmlForOutputDiv += `<li>Proving how unknowable the future is, you have lived ${age.getMarsYearsRemaining()} years past your life expectancy on Mars</li>`;
  // } else if (Math.sign(age.getMarsYearsRemaining()) === 0) {
  //   htmlForOutputDiv += `<li>Don't read too much into this, but you have lived your exact life expectancy on Mars.</li>`;
  // } if (Math.sign(age.getJupiterYearsRemaining()) === 1) {
  //   htmlForOutputDiv += `<li>You have an estimated ${age.getJupiterYearsRemaining()} years remaining on Jupiter</li>`;
  // } else if (Math.sign(age.getJupiterYearsRemaining()) === -1) {
  //   htmlForOutputDiv += `<li>Proving how unknowable the future is, you have lived ${age.getJupiterYearsRemaining()} years past your life expectancy on Jupiter</li>`;
  // } else if (Math.sign(age.getJupiterYearsRemaining()) === 0) {
  //   htmlForOutputDiv += `<li>Don't read too much into this, but you have lived your exact life expectancy on Jupiter.</li>`;
  // }
  outputDiv.prepend(htmlForOutputDiv);
};

$("form#user-input").submit(function(event) {
  event.preventDefault();
  const dob = $("#dob").val();
  const advocacy = $("input:radio[name=advocacy]:checked").val();
  const allyship = $("input:radio[name=allyship]:checked").val();
  const contributions = $("input:radio[name=contributions]:checked").val();
  const inquisitiveness = $("input:radio[name=inquisitiveness]:checked").val();
  const interconnectedness = $("input:radio[name=interconnectedness]:checked").val();
  const joyCultivation = $("input:radio[name=joyCultivation]:checked").val();
  const kindness = $("input:radio[name=kindness]:checked").val();
  const openheartedness = $("input:radio[name=openheartedness]:checked").val();
  const personalGrowth = $("input:radio[name=personalGrowth]:checked").val();
  const respect = $("input:radio[name=respect]:checked").val();
  const selfCare = $("input:radio[name=selfCare]:checked").val();
  const selfReflection = $("input:radio[name=selfReflection]:checked").val();
  const sharing = $("input:radio[name=sharing]:checked").val();
  const valuesInAction = $("input:radio[name=valuesInAction]:checked").val();
  const age = new Age(dob, advocacy, allyship, contributions, inquisitiveness, interconnectedness, joyCultivation, kindness, openheartedness, personalGrowth, respect, selfCare, selfReflection, sharing, valuesInAction);
  displayOutput(age);
  $("div#output").show();
  $("form#user-input").hide();
});