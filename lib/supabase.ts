import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

let supabase: any = null

if (typeof window !== 'undefined') {
  // Only create the client on the client side
  supabase = createClientComponentClient()
}

export { supabase }