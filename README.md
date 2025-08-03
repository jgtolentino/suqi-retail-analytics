# 🏪 SUQI Retail Analytics

A comprehensive real-time analytics platform designed for Filipino sari-sari stores, providing actionable insights on consumer behavior, transaction patterns, and inventory optimization.

![SUQI Dashboard](https://img.shields.io/badge/Status-Live-success)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)

## 🌐 Live Demo

Visit the live dashboard: [https://suqi-retail-analytics-otchgz4mi-scout-db.vercel.app](https://suqi-retail-analytics-otchgz4mi-scout-db.vercel.app)

## 📋 Overview

SUQI (Sari-sari Store Unified Intelligence) is a business intelligence platform that transforms raw transaction data from neighborhood convenience stores into actionable insights. Built with modern web technologies, it provides store owners and suppliers with real-time analytics to optimize operations and increase profitability.

## ✨ Features

### 📊 Interactive Dashboard Sections

#### 1. **Transaction Trends** *(Currently Active)*
- **Hourly Transaction Volume**: Area chart visualization showing peak hours
- **Transaction Duration Patterns**: Line chart tracking average transaction times
- **Revenue Distribution**: Bar chart displaying hourly revenue breakdown
- **Key Metrics Panel**: 
  - Peak hour identification
  - Average transaction value (₱42.50)
  - Average transaction duration (43.2s)
  - Daily transaction count

#### 2. **Product Mix & SKU Analysis** *(Coming Soon)*
- Brand performance tracking
- Category-wise sales distribution
- Substitution pattern analysis
- SKU optimization recommendations

#### 3. **Consumer Behavior** *(Coming Soon)*
- Request pattern analysis (Branded vs Unbranded)
- Decision-making insights
- Purchase frequency patterns
- Basket analysis

#### 4. **Consumer Profiling** *(Coming Soon)*
- Demographic segmentation
- Spending pattern analysis
- Location-based insights
- Customer lifetime value

### 🤖 AI-Powered Features

#### **AI Insights & Recommendations Panel**
- **Real-time Insights**: 4 AI-generated recommendations updated based on current data
- **Confidence Scoring**: Each insight includes a confidence percentage
- **Alert Types**:
  - 🔴 **Alerts**: Critical business notifications
  - 🔵 **Trends**: Emerging patterns in data
  - 🟢 **Opportunities**: Growth and optimization suggestions
  - 🟣 **Insights**: General business intelligence

Example insights:
- "Peak hours: 5-7 PM show 32% higher transaction volume" (89% confidence)
- "Marlboro substitutions increased 25% this week" (76% confidence)
- "Cross-sell potential: Yosi + Beverages combo up 18%" (82% confidence)

### 🎛️ Interactive Controls

#### **Filtering System**
- **Time Range**: Last 24 Hours / Last 7 Days / Last 30 Days
- **Location**: All Locations / Metro Manila / Rizal / Brgy San Antonio
- **Category**: All Categories / Yosi / Snacks / Haircare / Beverages
- **Weekend Toggle**: Filter for weekend-only data

### 📱 Responsive Design
- Mobile-first approach
- Tablet-optimized layouts
- Desktop widescreen support
- Touch-friendly interactions

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14.0.0**: React framework with SSR/SSG capabilities
- **React 18.2.0**: UI component library
- **TypeScript 5.2.2**: Type-safe development

### **UI & Styling**
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing
- **Inter Font**: Modern, readable typography

### **Data Visualization**
- **Recharts 2.15.4**: Composable charting library
  - Area charts with gradients
  - Line charts with smooth curves
  - Bar charts with tooltips
  - Responsive containers

### **Icons & Graphics**
- **Lucide React 0.263.1**: Modern icon library
  - Business icons (TrendingUp, ShoppingCart, Users)
  - UI icons (Calendar, Clock, Filter, MapPin)
  - Status icons (AlertCircle, Brain)

### **Backend Ready**
- **Supabase JS 2.53.0**: Backend as a Service
  - Real-time database connectivity
  - Authentication ready
  - Edge functions support
  - Row-level security

### **Development Tools**
- **ESLint**: Code linting
- **Git**: Version control
- **Vercel**: Deployment platform

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jgtolentino/suqi-retail-analytics.git
cd suqi-retail-analytics
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
suqi-retail-analytics/
├── components/
│   └── dashboard/
│       └── RetailAnalytics.tsx    # Main dashboard component
├── lib/
│   └── supabase.ts               # Supabase client & utilities
├── pages/
│   ├── _app.tsx                  # Next.js app wrapper
│   └── index.tsx                 # Home page
├── public/
│   ├── favicon.ico               # Browser favicon
│   └── favicon.svg               # SVG favicon
├── styles/
│   └── globals.css               # Global styles & Tailwind imports
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔧 Configuration

### Tailwind Theme Extensions
```javascript
// Custom colors
primary: {
  50: '#f0f9ff',
  500: '#8B5CF6',  // Main purple
  600: '#7C3AED',
  700: '#6D28D9'
}
```

### Chart Color Palette
```javascript
const COLORS = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#8B5A2B'];
```

## 📊 Data Integration

### Mock Data Structure
Currently using mock data generators for:
- Transaction trends (hourly patterns)
- Product mix (category & brand performance)
- Consumer behavior (request patterns)
- Demographics (customer segments)
- Substitution patterns

### Supabase Integration (Ready)
The platform is pre-configured for Supabase integration:
```typescript
// lib/supabase.ts
export const retailAnalyticsAPI = {
  getTransactionTrends(filters),
  getAIInsights(analysisType)
}
```

## 🎯 Use Cases

1. **Store Owners**
   - Identify peak business hours
   - Optimize inventory based on demand
   - Understand customer preferences

2. **Suppliers & Distributors**
   - Track brand performance
   - Identify substitution patterns
   - Optimize delivery schedules

3. **Market Researchers**
   - Analyze consumer behavior
   - Study demographic patterns
   - Track market trends

## 🚧 Roadmap

### Phase 1 ✅ (Current)
- [x] Interactive transaction trends
- [x] AI insights panel
- [x] Filtering system
- [x] Responsive design

### Phase 2 (Q1 2025)
- [ ] Complete Product Mix analysis
- [ ] Consumer behavior tracking
- [ ] Real-time data integration
- [ ] Export functionality

### Phase 3 (Q2 2025)
- [ ] Predictive analytics
- [ ] Inventory optimization
- [ ] Multi-store support
- [ ] Mobile app

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **TBWA** - Initial development and deployment

## 🙏 Acknowledgments

- Filipino sari-sari store owners for inspiration
- The Next.js team for an amazing framework
- Recharts for beautiful data visualizations
- Tailwind CSS for rapid UI development

---

Built with ❤️ for Filipino retail entrepreneurs