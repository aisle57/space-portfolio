"use client";

import { useRef, useCallback, useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { forceCollide } from "d3-force";
import { nodes, links, typeColors, typeList } from "./graph-data";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

export default function GraphPage() {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);
  const [didInitialFit, setDidInitialFit] = useState(false);
  const [activeTypes, setActiveTypes] = useState(() =>
    Object.fromEntries(typeList.map((t) => [t, true]))
  );

  const filteredData = useMemo(() => {
    const visibleNodes = nodes.filter((n) => activeTypes[n.type]);
    const visibleIds = new Set(visibleNodes.map((n) => n.id));
    const visibleLinks = links.filter(
      (l) =>
        visibleIds.has(typeof l.source === "object" ? l.source.id : l.source) &&
        visibleIds.has(typeof l.target === "object" ? l.target.id : l.target)
    );
    return { nodes: visibleNodes, links: visibleLinks };
  }, [activeTypes]);

  const neighborIds = useMemo(() => {
    if (!selectedNode) return new Set();
    const ids = new Set();
    links.forEach((l) => {
      const s = typeof l.source === "object" ? l.source.id : l.source;
      const t = typeof l.target === "object" ? l.target.id : l.target;
      if (s === selectedNode.id) ids.add(t);
      if (t === selectedNode.id) ids.add(s);
    });
    return ids;
  }, [selectedNode]);

  const connections = useMemo(() => {
    if (!selectedNode) return [];
    const result = [];
    links.forEach((l) => {
      const s = typeof l.source === "object" ? l.source.id : l.source;
      const t = typeof l.target === "object" ? l.target.id : l.target;
      if (s === selectedNode.id) {
        const target = nodes.find((n) => n.id === t);
        if (target)
          result.push({ node: target, relation: l.relation, direction: "out" });
      }
      if (t === selectedNode.id) {
        const source = nodes.find((n) => n.id === s);
        if (source)
          result.push({ node: source, relation: l.relation, direction: "in" });
      }
    });
    return result;
  }, [selectedNode]);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    if (fgRef.current) {
      fgRef.current.centerAt(node.x, node.y, 800);
      fgRef.current.zoom(3, 800);
    }
  }, []);

  const handleNodeHover = useCallback((node) => {
    setHoverNode(node || null);
    if (typeof document !== "undefined") {
      document.body.style.cursor = node ? "pointer" : "default";
    }
  }, []);

  const resetView = useCallback(() => {
    setSelectedNode(null);
    if (fgRef.current) {
      fgRef.current.zoomToFit(400, 80);
    }
  }, []);

  const handleEngineStop = useCallback(() => {
    if (!didInitialFit && fgRef.current) {
      fgRef.current.zoomToFit(400, 80);
      setDidInitialFit(true);
    }
  }, [didInitialFit]);

  const toggleType = (type) => {
    setActiveTypes((prev) => {
      const next = { ...prev, [type]: !prev[type] };
      const anyOn = Object.values(next).some(Boolean);
      return anyOn ? next : prev;
    });
    setDidInitialFit(false);
  };

  useEffect(() => {
    if (!selectedNode) return;
    const stillVisible = filteredData.nodes.some(
      (n) => n.id === selectedNode.id
    );
    if (!stillVisible) setSelectedNode(null);
  }, [filteredData, selectedNode]);

  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;

    fg.d3Force("charge")?.strength(-300);
    fg.d3Force("link")?.distance(130);
    fg.d3Force(
      "collide",
      forceCollide((node) => Math.sqrt(node.val || 8) * 4 + 16).strength(0.9)
    );

    fg.d3ReheatSimulation();

    const t = setTimeout(() => {
      if (fgRef.current) {
        fgRef.current.zoomToFit(400, 80);
        setDidInitialFit(true);
      }
    }, 700);

    return () => clearTimeout(t);
  }, [filteredData]);

  const paintNode = useCallback(
    (node, ctx, globalScale) => {
      const label = node.name;
      const fontSize = 12 / globalScale;
      const isSelected = selectedNode && selectedNode.id === node.id;
      const isNeighbor = neighborIds.has(node.id);
      const isHovered = hoverNode && hoverNode.id === node.id;
      const dimmed = selectedNode && !isSelected && !isNeighbor;

      const radius = Math.sqrt(node.val) * 3.2;

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius + 4, 0, 2 * Math.PI, false);
      ctx.fillStyle =
        isSelected || isHovered
          ? "rgba(167, 139, 250, 0.4)"
          : isNeighbor
          ? "rgba(167, 139, 250, 0.2)"
          : "rgba(167, 139, 250, 0.08)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = typeColors[node.type] || "#a78bfa";
      ctx.globalAlpha = dimmed ? 0.25 : 1;
      ctx.fill();
      ctx.globalAlpha = 1;

      if (globalScale > 0.55) {
        ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.globalAlpha = dimmed ? 0.25 : 1;
        ctx.fillStyle = "#e2e8f0";
        ctx.fillText(label, node.x, node.y + radius + fontSize + 2);
        ctx.globalAlpha = 1;
      }
    },
    [selectedNode, hoverNode, neighborIds]
  );

  return (
    <div className="relative w-full h-screen bg-[#030014] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-[#030014]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold tracking-tight">
            Isotope Economy
          </span>
          <span className="text-white/40 text-sm">Knowledge Graph</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/map" className="hover:text-white transition">
            Map
          </a>
          <span className="text-violet-300">Graph</span>
        </div>
      </div>

      <div className="absolute top-20 left-6 z-20 max-w-md">
        <p className="text-gray-500 text-sm mb-2">
          Content reviewed August 2026. Production nodes update when capacity or
          status changes.
        </p>
        <p className="text-gray-500 text-xs mb-3 max-w-md">
          Graph data export:{" "}
          <a
            href="/graph/isotope-economy-graph.json"
            className="text-sky-400 hover:underline"
          >
            JSON
          </a>
          . License: CC BY 4.0. Attribution: Isotope Economy.
        </p>
        <div className="flex flex-wrap gap-2">
          {typeList.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-3 py-1.5 rounded-full border text-xs transition ${
                activeTypes[type]
                  ? "border-white/20 text-white bg-white/10"
                  : "border-white/5 text-white/30"
              }`}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ background: typeColors[type] }}
              />
              {type}
            </button>
          ))}
          <button
            onClick={resetView}
            className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/60 hover:text-white hover:border-white/25 transition"
          >
            Reset view
          </button>
        </div>
      </div>

      <ForceGraph2D
        ref={fgRef}
        graphData={filteredData}
        nodeId="id"
        nodeVal="val"
        nodeLabel="name"
        linkColor={() => "rgba(167, 139, 250, 0.22)"}
        linkWidth={1.2}
        backgroundColor="#030014"
        nodeCanvasObject={paintNode}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        onEngineStop={handleEngineStop}
        cooldownTicks={200}
        d3AlphaDecay={0.015}
        d3VelocityDecay={0.25}
      />

      {selectedNode && (
        <div className="absolute top-20 right-4 md:right-6 w-[min(100%-2rem,22rem)] bg-[#0a0a1a]/95 border border-white/10 rounded-xl p-5 shadow-2xl z-30 backdrop-blur-sm max-h-[70vh] overflow-y-auto">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/40 mb-1">
                {selectedNode.type}
              </div>
              <h2 className="text-xl font-semibold text-white">
                {selectedNode.name}
              </h2>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-white/40 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-sm text-white/70 leading-relaxed mb-4">
            {selectedNode.note || "No note yet."}
          </p>

          {connections.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-white/40 mb-2">
                Connections
              </div>
              <div className="flex flex-col gap-2">
                {connections.map((c) => (
                  <button
                    key={c.direction + "-" + c.node.id + "-" + c.relation}
                    onClick={() => {
                      const graphNode = filteredData.nodes.find(
                        (n) => n.id === c.node.id
                      );
                      if (graphNode) handleNodeClick(graphNode);
                    }}
                    className="text-left rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 hover:border-violet-400/40 transition"
                  >
                    <div className="text-sm text-white">{c.node.name}</div>
                    <div className="text-xs text-white/40">
                      {c.relation?.replaceAll("_", " ") || "linked"} ·{" "}
                      {c.node.type}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="absolute bottom-6 left-6 z-20 text-xs text-white/40">
        {filteredData.nodes.length} nodes · {filteredData.links.length} links
      </div>
    </div>
  );
}
