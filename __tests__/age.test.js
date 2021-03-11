import Age from './../src/js/age.js'

describe('Age', () => {
  let reusableAge;
  
  beforeEach(() => {
    reusableAge = new Age("July 12, 1997", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10");
  });

  test('should create Age instance', () => {
    expect(reusableAge).toEqual({ dob: new Date("July 12, 1997"), advocacy: 10, allyship: 10, contributions: 10, inquisitiveness: 10, interconnectedness: 10, joyCultivation: 10, kindness: 10, openHeartedness: 10, personalGrowth: 10, respect: 10, selfCare: 10, selfReflection: 10, sharing: 10, valuesInAction: 10 })
  });

});


