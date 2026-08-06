"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  role?: string;
};

function pointColor(type: SiteType) {
  if (type === "Accelerator") return "#fbbf24";
  if (type === "Enrichment") return "#c084fc";
  return "#38bdf8";
}

export function GlobeView({ sites }: { sites: MapSite[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const points = useMemo(
    () =>
      sites.map((s) => ({
        ...s,
        size: 0.45,
        color: pointColor(s.type),
      })),
    [sites]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setSize({
        width: Math.floor(rect.width),
        height: Math.floor(rect.height),
      });
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);

    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[70vh] min-h-[420px] bg-black relative overflow-hidden flex items-center justify-center"
    >
      {size.width > 0 && size.height > 0 && (
        <Globe
          width={size.width}
          height={size.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={0.01}
          pointRadius="size"
          pointColor="color"
          pointLabel={(d: any) =>
            `\( {d.name}<br/> \){d.location}<br/>\( {d.type} \){
              d.role ? `<br/>${d.role}` : ""
            }`
          }
          atmosphereColor="#38bdf8"
          atmosphereAltitude={0.15}
        />
      )}
    </div>
  );
}
