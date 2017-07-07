interface Ask {
  timestamp: Number,   // output from Date.now()
  ask: String,         // the ask
  askee: String,       // person asked
  status: String       // 'Accepted' or 'Rejected'
}
