import generateAsks from './scaffold'

describe('generateAsks()', () => {

  test('should create n-count of entities', () => {
    const count = 4
    const generated = generateAsks(count)

    expect(generated).toBeTruthy()
    expect(generated).toHaveLength(count)
  })

  // TODO: Check the prototype of the instance
  const isAsk = obj => {
    return ['timestamp', 'status', 'ask', 'askee']
      .map(prop => obj.hasOwnProperty(prop))
      .every(x => x === true)
  }

  test('should create Ask instances', () => {
    const generated = generateAsks()
    generated.map(x => isAsk(x))
      .forEach(boolean => expect(boolean).toBe(true))
  })

})
