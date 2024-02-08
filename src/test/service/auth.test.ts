/* eslint-env mocha */
import { LogInService } from '../../services/Auth'
/**
 * * VALID THAT THE LOGIN RESPONSE IS TRUE IF THE CREDENTIAL ARE RIGHT
 */
test('Auth::Success::Credentials', async () => {
  const payload = { username: 'emanuelra94', password: '123' }
  const result = await LogInService(payload)
  expect(result.isSuccess).toBe(true)
})

/**
 * * VALID THAT THE LOGIN RESPONSE IS FALSE IF THE CREDENTIAL ARE FALSE
 */
test('Auth::Failed::Credentials', async () => {
  const payload = { username: 'emanuelra9', password: '1234' }
  const result = await LogInService(payload)
  expect(result.isSuccess).toBe(false)
})

/**
 * * VALID THAT THE TOKEN IS A STRING
 */
test('Auth::Token::isString', async () => {
  const payload = { username: 'emanuelra94', password: '123' }
  const result = await LogInService(payload)
  expect(typeof result.token).toBe('string')
})
