import BusinessCard from '@/components/BusinessCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto">
        <BusinessCard />
      </div>
    </main>
  );
}
