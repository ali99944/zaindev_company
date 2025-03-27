import { getSinglePrivacy } from "@/src/server-actions/privacy";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
  const privacy = await getSinglePrivacy((await params).id)

  return {
    title: privacy.name,
    description: privacy.description,
    keywords: [privacy.name, privacy.description]
  }
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ id: string }> }) {
  const privacy = await getSinglePrivacy((await params).id)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">{privacy.name}</h1>
            <div className="bg-white rounded p-8 md:p-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: privacy.description
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
