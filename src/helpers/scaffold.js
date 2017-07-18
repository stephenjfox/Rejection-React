export function makeDumbAsk(base=0) {
  return {
    timestamp: Date.now(),
    ask: "Something random question #" + (base + 1),
    askee: "Bob-" + base,
    status: base % 2 === 0 ? "Accepted" : "Rejected"
  }
}

export function generateAsks(count=3) {
  const asks = Array(count)

  for (var i = 0; i < asks.length; i++) {
    asks[i] = makeDumbAsk(i)
  }

  return asks
}

export default generateAsks
