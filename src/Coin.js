import React from 'react'
import './Coin.css'

function Coin({ name, symbol, image, price, volume,priceChange, marketcap, exchange}) {
    return (
        <div className='coin'>
            <div className='coin__container'>
                <div className='coin__name'>
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className='coin__symbol'>{symbol}</p>
                </div>
                <div className='coin__data'>
                    <p className='coin__price'>{exchange === 'myr' ? 'RM' : '$'}{price}</p>
                    <p className='coin__volume'>{exchange === 'myr' ? 'RM' : '$'}{volume && volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin__percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin__percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin__marketcap'>
                        MKT Cap : {exchange === 'myr' ? 'RM' : '$'}{marketcap.toLocaleString()}
                    </p>

                </div>
            </div>
            
    
        </div>
    )
}

export default Coin
