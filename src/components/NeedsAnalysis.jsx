import { useState, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const NeedsAnalysis = ({ needs, timePoints }) => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    if (needs && needs.length > 0 && timePoints && timePoints.length > 0) {
      const nodes = Object.keys(needs[0]).map(need => ({ id: need, group: 1 }));
      const links = [];

      for (let i = 0; i < timePoints.length - 1; i++) {
        if (needs[i] && needs[i + 1]) {
          Object.keys(needs[i]).forEach(need => {
            links.push({
              source: need,
              target: need,
              value: needs[i + 1][need] - needs[i][need]
            });
          });
        }
      }

      setGraphData({ nodes, links });
    }
  }, [needs, timePoints]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Needs Analysis Over Time</h2>
      <ForceGraph2D
        graphData={graphData}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={d => Math.abs(d.value) * 0.01}
        linkWidth={1}
        width={600}
        height={400}
      />
    </div>
  );
};

export default NeedsAnalysis;
