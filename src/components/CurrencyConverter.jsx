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
        const response = await fetch('https://api.quickso.cn/api/huilv/index.php');
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

  const currencyOptions = Object.keys(rates).filter(c => ['USD', 'CNY', 'EUR', 'GBP', 'JPY', 'HKD', 'KRW', 'AUD', 'CAD', 'SGD'].includes(c));

  if (loading) return <div className="text-center py-4">加载汇率中...</div>;
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="bg-white rounded-lg border p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">汇率计算</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm text-gray-600 mb-1">金额</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">从</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            {currencyOptions.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">到</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            {currencyOptions.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="border rounded px-3 py-2 bg-gray-50">
          <div className="text-lg font-medium text-gray-800">
            {convertedAmount.toFixed(2)} {toCurrency}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyConverter;