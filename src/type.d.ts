
export interface Counter {
  value: number
}

export interface Push {
  value: number
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}



export interface State {
  counter: Counter,
  push: Push
  post: Post[]
}
