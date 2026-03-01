import { Navbar, Welcome, Transactions, Footer } from "@/components/index";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <Welcome />
      <Transactions />
      <Footer />
    </div>
  );
};

export default HomePage;
