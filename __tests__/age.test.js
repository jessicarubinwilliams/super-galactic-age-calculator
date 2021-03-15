import Age from './../src/js/age.js'

describe('Age', () => {
  const RealDate = Date.now

  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2021-03-15T07:00:00.000Z').getTime())
  })
  
  afterAll(() => {
    global.Date.now = RealDate
  })

  let reusableAge;
  
  beforeEach(() => {
    reusableAge = new Age("July 12, 1997", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10");
  });

  test('should create Age instance', () => {
    expect(reusableAge).toEqual({ dob: new Date("July 12, 1997"), advocacy: 10, allyship: 10, contributions: 10, inquisitiveness: 10, interconnectedness: 10, joyCultivation: 10, kindness: 10, openheartedness: 10, personalGrowth: 10, respect: 10, selfCare: 10, selfReflection: 10, sharing: 10, valuesInAction: 10 })
  });

  test('should calculate age on Earth', () => {
    expect(reusableAge.getEarthAge()).toBeCloseTo(23.688842797336715);
  });

  test('should calculate age on Mercury', () => {
    expect(reusableAge.getMercuryAge()).toBeCloseTo(5.6853245335700695);
  });

  test('should calculate age on Venus', () => {
    expect(reusableAge.getVenusAge()).toBeCloseTo(14.68708989833291);
  });

  test('should calculate age on Mars', () => {
    expect(reusableAge.getMarsAge()).toBeCloseTo(44.5350491329499);
  });

  test('should calculate age on Jupiter', () => {
    expect(reusableAge.getJupiterAge()).toBeCloseTo(280.9498999992752, 1);
  });

  test('should calculate years left to live on Earth', () => {
    expect(reusableAge.getEarthYearsRemaining()).toBeCloseTo(74.31111545887762);
  });

  test('should calculate years left to live on Mercury', () => {
    expect(reusableAge.getMercuryYearsRemaining()).toBeCloseTo(17.834667001255546);
  });

  test('should calculate years left to live on Venus', () => {
    expect(reusableAge.getVenusYearsRemaining()).toBeCloseTo(46.07288928022321);
  });

  test('should calculate years left to live on Mars', () => {
    expect(reusableAge.getMarsYearsRemaining()).toBeCloseTo(139.70487116256055);
  });

  test('should calculate years left to live on Jupiter', () => {
    expect(reusableAge.getJupiterYearsRemaining()).toBeCloseTo(881.3296577392942, 1);
  });
});


