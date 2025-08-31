import React from 'react'
import { Home as HomeIcon, PieChart, FileText, Users, Gift, User, Download } from 'lucide-react';
const Sidebar = ({currentPage, setCurrentPage }) => {
  return (
    
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <div>
            <div className="font-semibold text-gray-800">capitalmind</div>
            <div className="text-xs text-teal-500 font-medium">premium</div>
          </div>
        </div>
        
        <nav className="space-y-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
              currentPage === 'home' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <HomeIcon size={18} />
            <span>Home</span>
          </button>
          
          <button
            onClick={() => setCurrentPage('portfolios')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
              currentPage  === 'portfolios' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <PieChart siz={18} />
            <span>Portfolios</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <FileText size={18} />
            <span>Experimentals</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <FileText size={18} />
            <span>Slack Archives</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <Users size={18} />
            <span>Refer a friend</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <Gift size={18} />
            <span>Gift a subscription</span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50">
            <User size={18} />
            <span>Account</span>
          </button>
        </nav>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">RN</span>
          </div>
          <span>Valid till Apr 19, 2025</span>
        </div>
      </div>
    </div>
  
  )
}

export default Sidebar
