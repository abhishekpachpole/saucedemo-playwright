import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://restful-booker.herokuapp.com';

let apiContext

test.beforeEach(async ({ request }) => {
   apiContext = request;
});

test('should get all bookings', async () => {
  const response = await apiContext.get(`${BASE_URL}/booking`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});

test('should create a new booking', async () => {
  const response = await apiContext.post(`${BASE_URL}/booking`, {
  data: {
    firstname: 'Abhi',
    lastname: 'Pachpole',
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: '2024-01-01',
      checkout: '2024-01-05'
    }
  }
});
   expect(response.status()).toBe(200);
   const body = await response.json();
   expect(body.bookingid).toBeDefined();
});