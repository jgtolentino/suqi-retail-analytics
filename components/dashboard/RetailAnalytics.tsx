import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { Calendar, Clock, MapPin, Filter, TrendingUp, Users, ShoppingCart, Zap, AlertCircle, Brain } from 'lucide-react';

// Mock data generators (replace with Supabase calls)
const generateTransactionTrends = () => [
  { hour: '6 AM', transactions: 12, value: 850, duration: 35 },
  { hour: '7 AM', transactions: 28, value: 1420, duration: 42 },
  { hour: '8 AM', transactions: 45, value: 2340, duration: 38 },
  { hour: '9 AM', transactions: 32, value: 1680, duration: 40 },
  { hour: '10 AM', transactions: 22, value: 1240, duration: 45 },
  { hour: '11 AM', transactions: 18, value: 980, duration: 48 },
  { hour: '12 PM', transactions: 38, value: 2150, duration: 52 },
  { hour: '1 PM', transactions: 42, value: 2380, duration: 49 },
  { hour: '2 PM', transactions: 25, value: 1450, duration: 41 },
  { hour: '3 PM', transactions: 20, value: 1120, duration: 44 },
  { hour: '4 PM', transactions: 35, value: 1890, duration: 46 },
  { hour: '5 PM', transactions: 48, value: 2650, duration: 43 },
  { hour: '6 PM', transactions: 52, value: 2840, duration: 41 },
  { hour: '7 PM', transactions: 38, value: 2180, duration: 39 },
  { hour: '8 PM', transactions: 22, value: 1320, duration: 42 },
  { hour: '9 PM', transactions: 15, value: 890, duration: 38 }
];

const generateProductMix = () => [
  { category: 'Yosi', brand: 'Marlboro', sales: 450, revenue: 2925, rank: 1 },
  { category: 'Yosi', brand: 'Philip Morris', sales: 380, revenue: 2280, rank: 2 },
  { category: 'Snacks', brand: 'Nissin', sales: 320, revenue: 6400, rank: 1 },
  { category: 'Snacks', brand: 'Skyflakes', sales: 280, revenue: 2380, rank: 2 },
  { category: 'Haircare', brand: 'Pantene', sales: 240, revenue: 1920, rank: 1 },
  { category: 'Haircare', brand: 'Palmolive', sales: 220, revenue: 1650, rank: 2 },
  { category: 'Beverages', brand: 'Coca Cola', sales: 420, revenue: 7560, rank: 1 },
  { category: 'Commodities', brand: 'Generic', sales: 650, revenue: 3250, rank: 1 }
];

const generateConsumerBehavior = () => [
  { type: 'Branded Request', percentage: 68, method: 'Verbal' },
  { type: 'Unbranded Request', percentage: 22, method: 'Verbal' },
  { type: 'Pointing', percentage: 8, method: 'Pointing' },
  { type: 'Store Suggestion', percentage: 2, method: 'Suggestion' }
];

const generateDemographics = () => [
  { segment: 'Adult Male', transactions: 340, avgSpend: 45.50, location: 'Metro Manila' },
  { segment: 'Adult Female', transactions: 420, avgSpend: 38.20, location: 'Metro Manila' },
  { segment: 'Young Adult', transactions: 280, avgSpend: 52.80, location: 'Rizal' },
  { segment: 'Senior', transactions: 180, avgSpend: 35.40, location: 'Metro Manila' },
  { segment: 'Teen', transactions: 120, avgSpend: 28.60, location: 'Rizal' }
];

const generateSubstitutions = () => [
  { from: 'Palmolive', to: 'Pantene', frequency: 12, category: 'Haircare' },
  { from: 'Marlboro', to: 'Philip Morris', frequency: 15, category: 'Yosi' },
  { from: 'Coca Cola', to: 'Royal', frequency: 10, category: 'Beverages' },
  { from: 'Nissin', to: 'Lucky Me', frequency: 7, category: 'Snacks' }
];

const COLORS = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#8B5A2B'];

const Dashboard = () => {
  const [filters, setFilters] = useState({
    timeRange: '24h',
    location: 'all',
    category: 'all',
    weekendOnly: false
  });

  const [activeTab, setActiveTab] = useState('trends');
  const [aiInsights, setAiInsights] = useState<Array<{
    type: string;
    message: string;
    confidence: number;
  }>>([]);

  const transactionTrends = generateTransactionTrends();
  const productMix = generateProductMix();
  const consumerBehavior = generateConsumerBehavior();
  const demographics = generateDemographics();
  const substitutions = generateSubstitutions();

  useEffect(() => {
    // Simulate AI insights
    setAiInsights([
      { type: 'alert', message: 'Peak hours: 5-7 PM show 32% higher transaction volume', confidence: 0.89 },
      { type: 'trend', message: 'Marlboro substitutions increased 25% this week', confidence: 0.76 },
      { type: 'opportunity', message: 'Cross-sell potential: Yosi + Beverages combo up 18%', confidence: 0.82 },
      { type: 'insight', message: 'Weekend transactions average ₱15 higher value', confidence: 0.94 }
    ]);
  }, [filters]);

  const FilterBar = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <select 
            value={filters.timeRange}
            onChange={(e) => setFilters({...filters, timeRange: e.target.value})}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <select 
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="all">All Locations</option>
            <option value="metro_manila">Metro Manila</option>
            <option value="rizal">Rizal</option>
            <option value="san_antonio">Brgy San Antonio</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select 
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="all">All Categories</option>
            <option value="yosi">Yosi</option>
            <option value="snacks">Snacks</option>
            <option value="haircare">Haircare</option>
            <option value="beverages">Beverages</option>
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input 
            type="checkbox" 
            checked={filters.weekendOnly}
            onChange={(e) => setFilters({...filters, weekendOnly: e.target.checked})}
            className="rounded"
          />
          Weekend Only
        </label>
      </div>
    </div>
  );

  const AIRecommendationPanel = () => (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-800">AI Insights & Recommendations</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiInsights.map((insight, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <div className={`w-3 h-3 rounded-full mt-1 ${
                insight.type === 'alert' ? 'bg-red-400' :
                insight.type === 'trend' ? 'bg-blue-400' :
                insight.type === 'opportunity' ? 'bg-green-400' : 'bg-purple-400'
              }`} />
              <div className="flex-1">
                <p className="text-gray-800 text-sm mb-2">{insight.message}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Confidence:</span>
                  <div className="bg-gray-200 rounded-full h-2 w-16">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${insight.confidence * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">{Math.round(insight.confidence * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TransactionTrendsPanel = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Hourly Transaction Volume
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={transactionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip formatter={(value, name) => [`${value} ${name === 'transactions' ? 'txns' : '₱'}`, name]} />
            <Area type="monotone" dataKey="transactions" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-green-600" />
          Transaction Duration Patterns
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={transactionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}s`, 'Avg Duration']} />
            <Line type="monotone" dataKey="duration" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction Value Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={transactionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip formatter={(value) => [`₱${value}`, 'Total Value']} />
            <Bar dataKey="value" fill="#06B6D4" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-700">Peak Hour</span>
            <span className="font-semibold text-blue-600">6:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="text-gray-700">Avg Transaction Value</span>
            <span className="font-semibold text-green-600">₱42.50</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
            <span className="text-gray-700">Avg Duration</span>
            <span className="font-semibold text-purple-600">43.2s</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
            <span className="text-gray-700">Daily Transactions</span>
            <span className="font-semibold text-orange-600">487</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🏪 SUQI Retail Analytics</h1>
          <p className="text-gray-600">Real-time transaction analytics and consumer behavior insights</p>
        </div>

        {/* Filters */}
        <FilterBar />

        {/* AI Recommendations */}
        <AIRecommendationPanel />

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
          {[
            { id: 'trends', label: 'Transaction Trends', icon: TrendingUp },
            { id: 'products', label: 'Product Mix & SKU', icon: ShoppingCart },
            { id: 'behavior', label: 'Consumer Behavior', icon: Zap },
            { id: 'profiling', label: 'Consumer Profiling', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600 bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="transition-all duration-300">
          {activeTab === 'trends' && <TransactionTrendsPanel />}
          {activeTab === 'products' && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Product Mix & SKU Analysis</h3>
              <p className="text-gray-500">Interactive product performance dashboard coming soon...</p>
            </div>
          )}
          {activeTab === 'behavior' && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Zap className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Consumer Behavior Insights</h3>
              <p className="text-gray-500">Request patterns and decision analysis dashboard coming soon...</p>
            </div>
          )}
          {activeTab === 'profiling' && (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Consumer Profiling</h3>
              <p className="text-gray-500">Demographic analysis and spending patterns coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;