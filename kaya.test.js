describe('test', () => {
  const a = 1
  const b = 2
  test('a+b===3', () => {
    expect(a + b).toEqual(3)
  })
  test('number 0 is falsy but string 0 is truthy', () => {
    expect(0).toBeFalsy()
    expect('0').toBeTruthy()
  })
  test('array', () => {
    const colors = ['Red', 'Yellow', 'Blue']
    expect(colors).toHaveLength(3)
    expect(colors).toContain('Yellow')
    expect(colors).not.toContain('Red')
  })
  test('return a user object', () => {
    expect(getUser(1)).toStrictEqual({
      id: 1,
      email: `user1@test.com`,
    })
  })
  test('string', () => {
    expect(getUser(1).email).toBe('user1@test.com')
    expect(getUser(2).email).toMatch(/.*test.com$/)
  })
})

function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  }
}
