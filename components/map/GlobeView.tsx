"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

type SiteType =
  | "Research reactor"
  | "University reactor"
  | "Neutron source"
  | "Accelerator"
  | "Enrichment";

export type MapSite = {
  name: string;
  location: string;
  type: SiteType;
  lat: number;
  lng: number;
};

function pointColor(type: SiteType) {
  if (type === "Accelerator") return "#fbbf24";
  if (type === "Enrichment") return "#c084fc";
  return "#38bdf8";
}

export function GlobeView({ sites }: { sites: MapSite[] }) {
  const points = useMemo(
    () =>
      sites.map((s) => ({
        ...s,
        size: 0.45,
        color: pointColor(s.type),
      })),
    [sites]
  );

  return (
    <div className="w-full h-[70vh] min-h-[420px] bg-black relative">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointAltitude={0.01}
        pointRadius="size"
        pointColor="color"
        pointLabel={(d: any) => `\( {d.name}<br/> \){d.location}<br/>${d.type}`}
        atmosphereColor="#38bdf8"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
