"use client";

import { useRef, useCallback, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { nodes, links, typeColors } from "./graph-data";

export default function GraphPage() {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    if (fgRef.current) {
      fgRef.current.centerAt(node.x, node.y, 800);
      fgRef.current.zoom(3, 800);
    }
  }, []);

  const handleNodeHover = useCallback((node) => {
    setHoverNode(node || null);
    document.body.style.cursor = node ? "pointer" : "default";
  }, []);

  const paintNode = useCallback((node, ctx, globalScale) => {
    const label = node.name;
    const fontSize = 12 / globalScale;
    const isSelected = selectedNode && selectedNode.id === node.id;
    const isHovered = hoverNode && hoverNode.id === node.id;

    const radius = Math.sqrt(node.val) * 3.2;
    
    // Outer glow
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius + 4, 0, 2 * Math.PI, false);
    ctx.fillStyle = isSelected || isHovered
      ? "rgba(167, 139, 250, 0.35)"
      : "rgba(167, 139, 250, 0.12)";
    ctx.fill();

    // Main node
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = typeColors[node.type] || "#a78bfa";
    ctx.fill();

    // Label
    if (globalScale > 0.6) {
      ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#e2e8f0";
      ctx.fillText(label, node.x, node.y + radius + fontSize + 2);
    }
  }, [selectedNode, hoverNode]);

  return (
    <div className="relative w-full h-screen bg-[#030014] overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-[#030014]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold tracking-tight">Isotope Economy</span>
          <span className="text-white/40 text-sm">Knowledge Graph</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/map" className="hover:text-white transition">Map</a>
          <span className="text-violet-300">Graph</span>
        </div>
      </div>

      <ForceGraph2D
        ref={fgRef}
        graphData={{ nodes, links }}
        nodeId="id"
        nodeVal="val"
        nodeLabel="name"
        linkColor={() => "rgba(167, 139, 250, 0.25)"}
        linkWidth={1.2}
        backgroundColor="#030014"
        nodeCanvasObject={paintNode}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        cooldownTicks={120}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
      />

      {/* Side Panel */}
      {selectedNode && (
        <div className="absolute top-20 right-6 w-80 bg-[#0a0a1a]/95 border border-white/10 rounded-xl p-5 shadow-2xl z-30 backdrop-blur-sm">
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
          <div className="text-sm text-white/70 leading-relaxed">
            Atomic note for <strong className="text-white">{selectedNode.name}</strong>.
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-6 left-6 z-20 bg-[#0a0a1a]/90 border border-white/10 rounded-lg px-4 py-3 text-xs text-white/70 backdrop-blur-sm">
        <div className="font-medium text-white/90 mb-2">Node Types</div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: typeColors.Isotope }} />
            Isotope
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: typeColors.Process }} />
            Process
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: typeColors.Application }} />
            Application
          </div>
        </div>
      </div>
    </div>
  );
}
