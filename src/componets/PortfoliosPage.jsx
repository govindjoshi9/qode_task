import React from 'react'
import { Home as HomeIcon,  Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { equityCurveData } from './data';


const PortfoliosPage = () => {
    const portfolioData = [
    { name: 'Focused', ytd: -1.7, '1d': 0.1, '1w': 2.9, '1m': 7.6, '3m': 2.2, '6m': 10.1, '1y': 43.5, '3y': 23.9, si: 22.5, dd: -2.8, maxdd: -40.3 },
    { name: 'NIFTY50', ytd: 3.1, '1d': 0.1, '1w': 1.1, '1m': 1.4, '3m': 4.4, '6m': 16.2, '1y': 26.2, '3y': 16.0, si: 14.5, dd: -1.5, maxdd: -38.4 }
  ];
  return (

    <div className="ml-64 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trailing Returns</h1>
        <button className="p-2 text-gray-600 hover:text-gray-800">
          <Download size={20} />
        </button>
      </div>
      
      {/* Returns Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-8 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">YTD</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">1D</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">1W</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">1M</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">3M</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">6M</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">1Y</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">3Y</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SI</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">DD</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">MAXDD</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {portfolioData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.name}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-center ${row.ytd < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                  {row.ytd > 0 ? '+' : ''}{row.ytd}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['1d']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['1w']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['1m']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['3m']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['6m']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['1y']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row['3y']}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">{row.si}%</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-center ${row.dd < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                  {row.dd}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-red-600">{row.maxdd}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500">
          Note: Returns above 1 year are annualised
        </div>
      </div>

      {/* Equity Curve Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Equity curve</h2>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-sm text-gray-500">Live since 2019-01-01</span>
              <span className="text-sm text-teal-600">Rebalanced</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">From date</span>
              <input 
                type="date" 
                defaultValue="2019-01-01"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">To date</span>
              <input 
                type="date" 
                defaultValue="2024-04-24"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="h-96 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={equityCurveData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="focused" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={false}
                name="Focused"
              />
              <Line 
                type="monotone" 
                dataKey="nifty" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={false}
                name="NIFTY50"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Drawdown Chart */}
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={equityCurveData}>
              <defs>
                <linearGradient id="drawdownGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fecaca" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#fecaca" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6b7280' }}
                domain={[-50, 10]}
              />
              <Area 
                type="monotone" 
                dataKey="drawdown" 
                stroke="#ef4444" 
                strokeWidth={1}
                fill="url(#drawdownGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  
  )
}

export default PortfoliosPage
