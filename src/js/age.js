export default class Age {
  constructor(dob, advocacy, allyship, contributions, inquisitiveness, interconnectedness, joyCultivation, kindness, openHeartedness, personalGrowth, respect, selfCare, selfReflection, sharing, valuesInAction) {
    this.dob = new Date(dob);
    this.advocacy = parseInt(advocacy);
    this.allyship = parseInt(allyship);
    this.contributions = parseInt(contributions);
    this.inquisitiveness = parseInt(inquisitiveness);
    this.interconnectedness = parseInt(interconnectedness);
    this.joyCultivation = parseInt(joyCultivation);
    this.kindness = parseInt(kindness);
    this.openHeartedness = parseInt(openHeartedness);
    this.personalGrowth = parseInt(personalGrowth);
    this.respect = parseInt(respect);
    this.selfCare = parseInt(selfCare);
    this.selfReflection = parseInt(selfReflection);
    this.sharing = parseInt(sharing);
    this.valuesInAction = parseInt(valuesInAction);
  }

  getEarthAge() {
    return (Date.now()-this.dob)/3.154e+10;
  }

  getMercuryAge() {
    return this.getEarthAge() * .24;
  }

  getVenusAge() {
    return this.getEarthAge() * .62;
  }

  getMarsAge() {
    return this.getEarthAge() * 1.88;
  }

  getJupiterAge() {
    return this.getEarthAge() * 11.86;
  }

  getEarthYearsRemaining() {
    let lifeExpectancy = 0;
    const ageValues = Object.values(this);
    ageValues.forEach((value) => {
      if (typeof value === "object") {
        lifeExpectancy += 0;
      } else {
        lifeExpectancy += value * .7;
      }
    });
    return (lifeExpectancy-this.getEarthAge()).toFixed(2);
  }

  getMercuryYearsRemaining() {
    return (this.getEarthYearsRemaining() * .24).toFixed(2);
  }

  getVenusYearsRemaining() {
    return (this.getEarthYearsRemaining() * .62).toFixed(2);
  }

  getMarsYearsRemaining() {
    return (this.getEarthYearsRemaining() * 1.88).toFixed(2);
  }
}