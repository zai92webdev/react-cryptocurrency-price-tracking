import './App.css';
import { useEffect,useState } from 'react'
import axios from 'axios';
import Coin from'./Coin'

function App() {

  const [coins,setCoins] = useState([])
  const [ search, setSearch]= useState('')
  const [ exchange, setExchange] = useState('myr')

  useEffect( ()=> {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${exchange}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
        setCoins(res.data)
    }).catch( err => console.log(err))

  },[exchange])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="app">
      <div className='app__coinSearch'>
        <h2>Search a Coin</h2>
        <form>
            <input type="text" placeholder="Search" className='coinInput' onChange={handleChange}/>
        </form>
      </div>

      <div className='app__currencyExchange'>
        <p>Change currency :</p>
        <button className={exchange === 'usd' ? 'button active' : 'button'} onClick={ () => setExchange('usd')}>USD</button>
        <button className={exchange === 'myr' ? 'button active' : 'button'} onClick={ () => setExchange('myr')}>MYR</button>
      </div>

      <div className='app__coin'>
        <h2>Top 100 Coins by Marker Capitalization</h2>
        <div className='app__coin__heading'>
          <p ># Coin</p>
          <p>Price</p>
          <p>24h Volume</p>
          <p>24h</p>
          <p>Mkt Cap</p>
        </div>
        {filteredCoins.map(coin => {
        return <Coin key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  marketcap={coin.market_cap}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                  exchange={exchange}
                />
      })}
      </div>
      

    </div>
  );
}

export default App;
