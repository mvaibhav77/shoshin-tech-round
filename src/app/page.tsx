import Dashboard from "@/components/Dashboard/Dashboard";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="dashboard relative  py-4 px-8 flex flex-col gap-4 w-full md:max-h-[100dvh]">
      {/* navbar */}
      <Navbar />

      {/* main dashboard */}
      <Dashboard />
    </div>
  );
}
