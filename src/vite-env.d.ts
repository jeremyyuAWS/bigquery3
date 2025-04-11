/// <reference types="vite/client" />

declare module 'react-heatmap-grid' {
  interface HeatMapProps {
    xLabels: string[];
    yLabels: string[];
    data: number[][];
    xLabelWidth?: number;
    yLabelWidth?: number;
    cellStyle?: (background: string, value: number, min: number, max: number, data: number[][], x: number, y: number) => React.CSSProperties;
    cellRender?: (value: number) => string;
  }
  
  const HeatMap: React.FC<HeatMapProps>;
  export default HeatMap;
}
