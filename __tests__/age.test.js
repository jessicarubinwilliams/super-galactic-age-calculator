import Age from './../src/js/age.js'

describe('Age', () => {
  let reusableAge;
  
  beforeEach(() => {
    reusableAge = new Age("July 12, 1997", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10");
  });

  test('should create Age instance', () => {
    expect(reusableAge).toEqual({ dob: new Date("July 12, 1997"), advocacy: 10, allyship: 10, contributions: 10, inquisitiveness: 10, interconnectedness: 10, joyCultivation: 10, kindness: 10, openHeartedness: 10, personalGrowth: 10, respect: 10, selfCare: 10, selfReflection: 10, sharing: 10, valuesInAction: 10 })
  });

  test('should calculate age on Earth', () => {
    expect(reusableAge.getEarthAge().toFixed(2)).toEqual(((Date.now()-reusableAge.dob)/3.154e+10).toFixed(2));
  });

  test('should calculate age on Mercury', () => {
    expect(reusableAge.getMercuryAge().toFixed(2)).toEqual((reusableAge.getEarthAge() * .24).toFixed(2));
  });

  test('should calculate age on Venus', () => {
    expect(reusableAge.getVenusAge().toFixed(2)).toEqual((reusableAge.getEarthAge() * .62).toFixed(2));
  });

  test('should calculate age on Mars', () => {
    expect(reusableAge.getMarsAge()).toEqual((reusableAge.getEarthAge() * 1.88));
  });
});


