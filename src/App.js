import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import cardData from './components/cardData'
import Footer from './components/Footer'

function App() {
  const cards = cardData.map(item => {
    return (
      <Card s
        key={item.id} 
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <main className='container'>
        {cards}
      </main>
      <Footer />
    </div>
  );
}

export default App;
