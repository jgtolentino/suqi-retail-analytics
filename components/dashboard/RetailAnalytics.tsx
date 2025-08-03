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

  const ProductMixPanel = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-purple-600" />
          Top Performing SKUs by Revenue
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productMix} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="brand" type="category" width={100} />
            <Tooltip formatter={(value) => [`₱${value}`, 'Revenue']} />
            <Bar dataKey="revenue" fill="#8B5CF6">
              {productMix.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          Category Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: 'Yosi', value: 830, units: 'units' },
                { name: 'Beverages', value: 420, units: 'units' },
                { name: 'Snacks', value: 600, units: 'units' },
                { name: 'Haircare', value: 460, units: 'units' },
                { name: 'Commodities', value: 650, units: 'units' }
              ]}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {productMix.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Brand Substitution Matrix</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">From</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">To</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {substitutions.map((sub, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">{sub.from}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{sub.to}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {sub.frequency}x
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">{sub.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">SKU Performance Metrics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
            <span className="text-gray-700">Top SKU</span>
            <span className="font-semibold text-purple-600">Marlboro (450 units)</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="text-gray-700">Highest Revenue</span>
            <span className="font-semibold text-green-600">Coca Cola (₱7,560)</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-700">Most Substituted</span>
            <span className="font-semibold text-blue-600">Marlboro → Philip Morris</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
            <span className="text-gray-700">Category Leader</span>
            <span className="font-semibold text-orange-600">Yosi (35% share)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ConsumerBehaviorPanel = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-orange-600" />
          Request Pattern Analysis
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={consumerBehavior}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ type, percentage }) => `${type} ${percentage}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="percentage"
            >
              {consumerBehavior.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          Decision Time by Request Type
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[
            { type: 'Branded Request', avgTime: 35, transactions: 850 },
            { type: 'Unbranded Request', avgTime: 52, transactions: 275 },
            { type: 'Pointing', avgTime: 28, transactions: 100 },
            { type: 'Store Suggestion', avgTime: 65, transactions: 25 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="avgTime" fill="#06B6D4" name="Avg Time (s)" />
            <Bar yAxisId="right" dataKey="transactions" fill="#10B981" name="Transactions" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Purchase Decision Factors</h3>
        <div className="space-y-4">
          {[
            { factor: 'Brand Loyalty', percentage: 68, color: 'purple' },
            { factor: 'Price Sensitivity', percentage: 45, color: 'green' },
            { factor: 'Availability', percentage: 82, color: 'blue' },
            { factor: 'Store Recommendation', percentage: 23, color: 'orange' },
            { factor: 'Visual Appeal', percentage: 35, color: 'pink' }
          ].map((factor, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">{factor.factor}</span>
                <span className="text-sm font-medium text-gray-900">{factor.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`bg-${factor.color}-500 h-2 rounded-full`}
                  style={{ width: `${factor.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Behavioral Insights</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-800">Peak Decision Time</p>
              <p className="text-xs text-gray-600">Unbranded requests take 48% longer to process</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-800">Brand Preference</p>
              <p className="text-xs text-gray-600">68% of customers request specific brands</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <Users className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-800">Interaction Pattern</p>
              <p className="text-xs text-gray-600">Morning customers prefer pointing (12% vs 8% avg)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConsumerProfilingPanel = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-600" />
          Customer Demographics
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={demographics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="segment" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="transactions" fill="#8B5CF6" name="Transactions" />
            <Bar yAxisId="right" dataKey="avgSpend" fill="#06B6D4" name="Avg Spend (₱)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-600" />
          Geographic Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[
                { name: 'Metro Manila', value: 940, percentage: 69 },
                { name: 'Rizal', value: 280, percentage: 21 },
                { name: 'San Antonio', value: 120, percentage: 10 }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {demographics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {[
            { location: 'Metro Manila', customers: 940, color: 'purple' },
            { location: 'Rizal', customers: 280, color: 'blue' },
            { location: 'San Antonio', customers: 120, color: 'green' }
          ].map((loc, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 bg-${loc.color}-500 rounded-full`} />
                <span>{loc.location}</span>
              </div>
              <span className="font-medium">{loc.customers} customers</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Spending Patterns by Segment</h3>
        <div className="space-y-4">
          {demographics.map((demo, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{demo.segment}</h4>
                  <p className="text-xs text-gray-500">{demo.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₱{demo.avgSpend}</p>
                  <p className="text-xs text-gray-500">avg spend</p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>{demo.transactions} transactions</span>
                <span>₱{(demo.transactions * demo.avgSpend).toLocaleString()} total</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Lifetime Value</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={[
            { month: 'Jan', newCustomers: 45, returningCustomers: 120, clv: 2850 },
            { month: 'Feb', newCustomers: 52, returningCustomers: 135, clv: 3120 },
            { month: 'Mar', newCustomers: 48, returningCustomers: 142, clv: 3350 },
            { month: 'Apr', newCustomers: 58, returningCustomers: 155, clv: 3680 },
            { month: 'May', newCustomers: 62, returningCustomers: 168, clv: 3920 },
            { month: 'Jun', newCustomers: 55, returningCustomers: 175, clv: 4150 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="newCustomers" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            <Area type="monotone" dataKey="returningCustomers" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold text-purple-600">₱4,150</p>
            <p className="text-xs text-gray-500">Avg CLV</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">76%</p>
            <p className="text-xs text-gray-500">Retention Rate</p>
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
          {activeTab === 'products' && <ProductMixPanel />}
          {activeTab === 'behavior' && <ConsumerBehaviorPanel />}
          {activeTab === 'profiling' && <ConsumerProfilingPanel />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;