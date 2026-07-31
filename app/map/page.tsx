"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type MapSite = {
  name: string;
  location: string;
  type: string;
  lat: number;
  lng: number;
};

const SITES: MapSite[] = [
  { name: "HFIR", location: "Oak Ridge, USA", type: "Research reactor", lat: 35.93, lng: -84.31 },
  { name: "ATR", location: "Idaho, USA", type: "Research reactor", lat: 43.52, lng: -112.05 },
  { name: "MURR", location: "Columbia, Missouri, USA", type: "University reactor", lat: 38.95, lng: -92.33 },
  { name: "McMaster", location: "Hamilton, Canada", type: "University reactor", lat: 43.26, lng: -79.92 },
  { name: "BR2", location: "Mol, Belgium", type: "Research reactor", lat: 51.22, lng: 5.09 },
  { name: "HFR Petten", location: "Petten, Netherlands", type: "Research reactor", lat: 52.79, lng: 4.67 },
  { name: "FRM II", location: "Garching, Germany", type: "Research reactor", lat: 48.27, lng: 11.67 },
  { name: "ILL", location: "Grenoble, France", type: "Neutron source", lat: 45.19, lng: 5.72 },
  { name: "LVR-15", location: "Rez, Czech Republic", type: "Research reactor", lat: 50.16, lng: 14.37 },
  { name: "MARIA", location: "Swierk, Poland", type: "Research reactor", lat: 52.12, lng: 21.35 },
  { name: "OPAL", location: "Lucas Heights, Australia", type: "Research reactor", lat: -34.05, lng: 150.98 },
  { name: "SAFARI-1", location: "Pelindaba, South Africa", type: "Research reactor", lat: -25.8, lng: 27.94 },
  { name: "HANARO", location: "Daejeon, South Korea", type: "Research reactor", lat: 36.42, lng: 127.37 },
  { name: "Dhruva", location: "Trombay, India", type: "Research reactor", lat: 19.01, lng: 72.92 },
  { name: "BLIP", location: "Brookhaven, USA", type: "Accelerator", lat: 40.87, lng: -72.87 },
  { name: "LANL IPF", location: "Los Alamos, USA", type: "Accelerator", lat: 35.88, lng: -106.3 },
  { name: "TRIUMF", location: "Vancouver, Canada", type: "Accelerator", lat: 49.25, lng: -123.23 },
  { name: "ARRONAX", location: "Nantes, France", type: "Accelerator", lat: 47.25, lng: -1.52 },
  { name: "PSI", location: "Villigen, Switzerland", type: "Accelerator", lat: 47.54, lng: 8.22 },
  { name: "iThemba LABS", location: "Cape Town area, South Africa", type: "Accelerator", lat: -33.98, lng: 18.62 },
];

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const cssId = "leaflet-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const scriptId = "leaflet-js";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current || mapInstance.current) return;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: true,
        worldCopyJump: true,
      }).setView([20, 10], 2);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 18,
        }
      ).addTo(map);

      SITES.forEach((site) => {
        const marker = L.circleMarker([site.lat, site.lng], {
          radius: 7,
          color: "#38bdf8",
          fillColor: "#38bdf8",
          fillOpacity: 0.85,
          weight: 1,
        }).addTo(map);

        marker.bindPopup(
          `<strong style="color:#0f172a">${site.name}</strong><br/>` +
            `<span style="color:#334155">${site.location}</span><br/>` +
            `<span style="color:#64748b">${site.type}</span>`
        );
      });

      mapInstance.current = map;
    };

    if (existing && (window as any).L) {
      initMap();
      return;
    }

    const script = existing || document.createElement("script");
    script.id = scriptId;
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = initMap;
    if (!existing) document.body.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Map</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Point sites from the Facilities dataset. Reactors and accelerators
            only. Networks and logistics layers are not plotted.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
          <div ref={mapRef} className="w-full h-[70vh] min-h-[420px]" />
        </div>

        <p className="text-gray-500 text-sm mb-10">
          Click a marker for site details. Full context lives on the Facilities
          page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <Link
            href="/facilities"
            className="py-3 px-6 button-primary text-center text-white rounded-lg"
          >
            Facilities
          </Link>
          <Link
            href="/companies"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Companies
          </Link>
          <Link
            href="/watch"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Q3 Watchlist
          </Link>
        </div>
      </div>
    </main>
  );
}
