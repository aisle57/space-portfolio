export default function IsotopesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Isotope Directory
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A curated foundation of the isotopes that matter most for medicine, energy, quantum technologies, advanced materials, and strategic supply chains. Links to complete official datasets are included for the full set of known isotopes.
          </p>
        </div>

        {/* Beginner Section */}
        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Start Here
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most elements exist in more than one form. These different forms are called isotopes. They have the same number of protons, so they are the same element, but different numbers of neutrons.
            </p>
            <p>
              Some isotopes are stable. Others are unstable and release energy as they change. That energy and those nuclear properties are what make certain isotopes useful in medicine, energy systems, quantum technologies, and industry.
            </p>
            <p>
              This directory focuses on the isotopes that currently matter most, and points to complete data sources for every known isotope.
            </p>
          </div>
        </section>

        {/* Medical & Theranostics */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Theranostics
          </h2>
          <div className="space-y-4">
            {[
              ["Tc-99m", ["Medical", "Diagnostics"], "The dominant isotope in diagnostic nuclear medicine. Used in tens of millions of procedures each year."],
              ["F-18", ["Medical", "PET"],
