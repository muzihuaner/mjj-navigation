import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('CNY');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.frankfurter.app/latest');
        const data = await response.json();
        setRates(data.rates);
        setLoading(false);
      } catch (err) {
        setError('无法获取实时汇率');
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  useEffect(() => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(amount * rate);
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  if (loading) return <div className="text-center py-4">加载汇率中...</div>;
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="bg-red-100 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">实时汇率计算</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700">金额</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">从</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {Object.keys(rates).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">到</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {Object.keys(rates).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="text-lg font-medium text-blue-600">
            {convertedAmount.toFixed(2)} {toCurrency}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyConverter;

