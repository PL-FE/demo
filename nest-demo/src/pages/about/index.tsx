import Head from "next/head"
import store from "@/store/index"
import { observer } from "mobx-react"

export default observer(function Home() {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <button
        onClick={() => {
          store.increment()
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          store.decrement()
        }}
      >
        decrement
      </button>
      <span> Count {store.count} </span>
    </div>
  )
})
