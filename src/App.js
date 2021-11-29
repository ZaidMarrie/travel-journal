import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import cardData from './components/cardData'

function App() {
  const cards = cardData.map(item => {
    return (
      <Card 
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
    </div>
  );
}

export default App;
