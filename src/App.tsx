import Left from './Left'
import Right from './Right'


function App() {
  return (
    <>
      <div className="md:flex md:items-center md:justify-center md:h-dvh md:mx-auto md:max-w-2xl">
        <div className="bg-white shadow md:flex rounded-3xl">
          <Left></Left>
          <Right></Right>
        </div>
      </div>
    </>
  )
}

export default App
