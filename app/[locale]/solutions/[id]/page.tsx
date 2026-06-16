import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailPage from "@/components/solutions/ProductDetailPage";
import { PRODUCTS } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProductDetailPage product={product} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
