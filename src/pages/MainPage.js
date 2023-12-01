
import React ,{useEffect, useState} from 'react';
import axios from 'axios';


export default function MainPage() {

  //state for the form fields
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);

  //handleSubmit method
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, sourceCurrency, targetCurrency, amountInSourceCurrency);
  }

  //get all currencies list
  useEffect(() =>{
    const getCurrencyNames = async() =>{
      try{
        const response = await axios.get("http://localhost:5000/getAllCurrencies");
        setCurrencyNames(response.data);
      }catch(err){
        console.error(err);
      }
    };
    getCurrencyNames();
  }, [])

  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>
        <p className='lg:mx-32 opacity-40 py-6'>Welcome! Thus application allows you to easilty convert currencies based on the latest exchange rates. Whether you're planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool id here to help!.</p>
    <div className='mt-5 flex items-center justify-center flex-col'>
      <section className='w-full lg:w-1/2'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
    <label htmlFor= {date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
    <input onChange = {(e) => setDate(e.target.value)} type="date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  required />
  </div>

  <div className="mb-4">
    <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
   <select onChange = {(e) => setSourceCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name={sourceCurrency} id={sourceCurrency} value={sourceCurrency}>
    <option value="" >
    Select Source Currency
    </option>
   </select>
  </div>
  <div className="mb-4">
    <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
   <select onChange = {(e) => setTargetCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   name={targetCurrency} id={targetCurrency} value={targetCurrency} >
    <option value="" >
    Select Target Currency
    </option>
    {Object.keys(currencyNames).map((currecny) =>(
      <option className = "p-1"> hey = {currency} value={currecny}
      {currencyNames{currecny}}
      </option>
    ))}
   </select>
  </div>
  <div className="mb-4">
    <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source currency</label>
    <input onChange = {(e) => setAmountInSourceCurrency(e.target.value)} type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  required placeholder='Amount in source currency'  name={amountInSourceCurrency} id={amountInSourceCurrency} value={amountInSourceCurrency}/>
  </div>
  <button className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>
    {""}Get the target currency</button>
        </form>
      </section>
    </div>
    </div>
  )
}
