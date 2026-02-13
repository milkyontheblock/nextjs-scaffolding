import Layout from "@/layouts/default"
import { defaultMetadata } from "@/lib/utils"

export default function Page() {
  return (
    <Layout meta={defaultMetadata}>
      <div className="min-h-screen w-full flex items-center justify-center">
        <p>Time to build something sexy, I think?</p>
      </div>
    </Layout>
  )
}