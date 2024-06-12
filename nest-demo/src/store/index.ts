import { makeAutoObservable } from "mobx"

export class Store {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
}
const store = new Store()
export default store
