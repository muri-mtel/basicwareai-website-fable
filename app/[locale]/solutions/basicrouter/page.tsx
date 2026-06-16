import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BasicRouterPage from "@/components/solutions/BasicRouterPage";

export default async function BasicRouterRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Navbar />
      <main>
        <BasicRouterPage locale={locale} />
      </main>
      <Footer />
    </>
  );
}
