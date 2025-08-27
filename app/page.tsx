export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Gratitude App</h1>
        <p className="text-gray-600 mb-8">
          Share daily gratitude with your communities
        </p>
        <div className="space-y-2">
          <p className="text-green-600 text-sm">✅ Next.js Foundation</p>
          <p className="text-green-600 text-sm">✅ Supabase Dependencies</p>
          <p className="text-green-600 text-sm">✅ Tailwind CSS</p>
          <p className="text-blue-600 font-semibold">Ready for Step 2!</p>
        </div>
      </div>
    </div>
  );
} 
