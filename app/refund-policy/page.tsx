import { RefundPolicyContent } from "./components/refund-policy-content"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">سياسة الاسترجاع</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <RefundPolicyContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

