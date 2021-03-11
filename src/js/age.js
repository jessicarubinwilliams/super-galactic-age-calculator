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
};