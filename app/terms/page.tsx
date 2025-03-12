import { TermsContent } from "./components/terms-content"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">الشروط والأحكام</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <TermsContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

