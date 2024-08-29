import React from 'react'
import Nav from './components/Nav'
import First from './sections/First'
import Second from './sections/second'
import Third from './sections/third'
import Fourth from  './sections/fourth'
import Fifth from './sections/fifth'
const App = () => {
  return (
    <main className='relative  '>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b bg-gray-400  '>
        <First/>
      </section>
      
      <section className='mt-[5rem] bg-gray-50'>
        <Second/>
      </section>
      <section className='padding'>
        <Third/>
      </section>
      <section className=''>
        <Fourth/>
      </section>
      <section className=''>
        <Fifth/>

      </section>

    </main>
  )
}

export default App
