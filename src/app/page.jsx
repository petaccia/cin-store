import NavbarDesktop from "@/components/layout/navbar/NavbarDesktop";
import MediaCard from "@/components/common/cards/MediaCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <NavbarDesktop />

      {/* Conteneur pour centrer la carte */}
      <main className="flex justify-center mt-8">
        <section className="w-full max-w-md">
          <MediaCard />
        </section>
      </main>
    </div>
  );
}
