import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ProductsSection from '@/components/products-section';
import BetaForm from '@/components/beta-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <BetaForm />
      <Footer />
    </main>
  );
}