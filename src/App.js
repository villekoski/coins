import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Coin from './Coin';
// teksti

function App() {
const [coins, setCoins] = useState([])
const [haku, setHaku] = useState('')
const nimet = ["Nimi ","ID ", "Hinta ", "Volume ", "24h muutos ", "Cap "]

useEffect(() => {
  axios
  .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res => {
    setCoins(res.data)
  })
  .catch(error => console.log(error))
}, [])

const handleChange = e => {
  setHaku(e.target.value)
}

const Otsikot = (props) => {
  console.log(props)
 const mapatutNimet = nimet.map(nimi => nimi.toLowerCase())
  return(
    <div className='coin-otsikot'>{mapatutNimet} </div>
  )
}

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(haku.toLowerCase()),
 
  )

  return (
    <div className="coin-app">
      <div className='coin-haku'>
        <h1 className='coin-teksti'>Etsi valuuttoja</h1>
      
          <form>
            <input type='text' placeholder='Haku'
            className='coin-syote' onChange={handleChange}/>
          </form>

          <Otsikot nimet={nimet} />
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
           />
        )
      })}
    </div>

  );
}

export default App;
