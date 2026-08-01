import dynamic from "next/dynamic";

const GraphPage = dynamic(() => import("./GraphPage"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#030014] flex items-center justify-center text-white">
      Loading graph...
    </div>
  ),
});

export const metadata = {
  title: "Knowledge Graph | Isotope Economy",
  description: "Interactive knowledge graph of isotopes, facilities, processes, and applications.",
};

export default function Page() {
  return <GraphPage />;
}
