import React from 'react'
import './Coin.css'

const Coin = ({image,name,symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-rivi'>
            <div className='coin'>
                <img src={image} alt='crypto' />
                <h1>{name}</h1>
                <p className='coin-symboli'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-hinta'>${price}</p>
                <p className='coin-maara'>${volume.toLocaleString()
                }</p>
                {priceChange < 0 ? (
                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                )
                :
                ( <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>
                    Market cap: ${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin