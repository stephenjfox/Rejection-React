describe('Ask Interface Structure', () => {
  const ask = {}

  beforeEach(() => {
    Object.assign(ask, {
      timestamp: new Date(),
      ask: "can I have fries?",
      askee: "Bob Martin",
      status: "Accepted"
    })
  })

  test('Ask should exist', () => {
    expect(ask).not.toBeUndefined()
  })

  test('Ask should have timestamp', () => {
    expect(ask.timestamp).toBeTruthy()
  })

  test('Ask should have "ask" property', () => {
    expect(ask.ask).toBeTruthy()
  })

  test('Ask should have "askee" property', () => {
    expect(ask.askee).toBeTruthy()
  })

  test('Ask should have "status" property', () => {
    expect(ask.status).toBeTruthy()
  })

  test('Ask should NOT have any other property', () => {
    const properties = Object.keys(ask)

    expect(properties).toBeTruthy();
    expect(properties.length).toEqual(4)
  })
})
