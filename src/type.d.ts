
export interface Counter {
  value: number
}

export interface Push {
  value: number
}

export interface State {
  counter: Counter,
  push: Push
}
