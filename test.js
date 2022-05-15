const {BasketController}=require('./controllers/BasketController')

 test('sending B01,G01 shall result 37.85', () => {
    return new BasketController().getTotal("B01,G01").then(data => {
      expect(Number(data)).toBe(Number(37.85));
    });
  });

  test('sending R01, R01 shall result 54.37', () => {
    return new BasketController().getTotal("R01,R01").then(data => {
      expect(Number(data)).toBe(Number(54.37));
    });
  });

  test('sending R01, G01 shall result 60.85', () => {
    return new BasketController().getTotal("R01, G01").then(data => {
      expect(Number(data)).toBe(Number(60.85));
    });
  });

  test('sending B01, B01, R01, R01, R01 shall result 98.27', () => {
    return new BasketController().getTotal("B01, B01, R01, R01, R01").then(data => {
      expect(Number(data)).toBe(Number(98.27));
    });
  });
