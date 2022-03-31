import React from 'react';
import '../styles/ResultsPopup.scss';
import totalSales from '../images/TotalSales.png';
import organicTraffic from '../images/OrganicTraffic.png';
import returningCustomers from '../images/ReturningCustomerRate.png';
import conversionRate from '../images/ConversionRate.png';

export default function ResultsPopup(props) {
    const { salesCardOpen, trafficCardOpen, returningCardOpen, conversionCardOpen, toggleSalesCard, toggleTrafficCard, toggleReturningCard, toggleConversionCard } = props;

    return (
        <section id='results-popup'>
            <div className='content-wrap'>
                <div className={salesCardOpen ? 'content' : 'hide'}>
                    <div className='image-wrap'>
                        <img src={totalSales} alt='Total Sales Chart' />
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleSalesCard(!salesCardOpen)}}
                    >
                        Close
                    </button>
                </div>

                <div className={trafficCardOpen ? 'content' : 'hide'}>
                    <div className='image-wrap'>
                        <img src={organicTraffic} alt='Total Sessions Chart' />
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleTrafficCard(!trafficCardOpen)}}
                    >
                        Close
                    </button>
                </div>

                <div className={returningCardOpen ? 'content' : 'hide'}>
                    <div className='image-wrap'>
                        <img src={returningCustomers} alt='Returning Customer Rate Chart' />
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleReturningCard(!returningCardOpen)}}
                    >
                        Close
                    </button>
                </div>

                <div className={conversionCardOpen ? 'content' : 'hide'}>
                    <div className='image-wrap'>
                        <img src={conversionRate} alt='Conversion Rate Chart' />
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleConversionCard(!conversionCardOpen)}}
                    >
                        Close
                    </button>
                </div>
            </div>
        </section>
    )
}