import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

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
})