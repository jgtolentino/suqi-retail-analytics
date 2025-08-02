import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// API utility functions for retail analytics
export const retailAnalyticsAPI = {
  // Get transaction trends
  async getTransactionTrends(filters = {}) {
    const { data, error } = await supabase.functions.invoke('retail-analytics-api/transaction-trends', {
      method: 'GET',
    })
    
    if (error) throw error
    return data
  },

  // Get AI insights
  async getAIInsights(analysisType = 'trends') {
    const { data, error } = await supabase.functions.invoke('retail-analytics-api/ai-insights', {
      method: 'GET',
    })
    
    if (error) throw error
    return data
  }
}