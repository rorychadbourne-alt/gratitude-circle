


'use client'
export const dynamic = 'force-dynamic'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)
      setLoading(false)
    }
    
    if (mounted) {
      getUser()
    }
  }, [router, mounted])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {user?.user_metadata?.full_name || user?.email}!
            </h1>
            <button 
              onClick={signOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Dashboard - Coming Soon!
          </h2>
          <p className="text-gray-600">
            This is where the gratitude features will be built next.
          </p>
        </div>
      </div>
    </div>
  )
}
