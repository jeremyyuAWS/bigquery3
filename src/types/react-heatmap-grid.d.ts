declare module 'react-heatmap-grid' {
  import { ReactNode } from 'react';

  interface HeatMapProps {
    xLabels: string[];
    yLabels: string[];
    data: number[][];
    xLabelWidth?: number;
    yLabelWidth?: number;
    height?: number;
    cellStyle?: (
      background: string,
      value: number,
      min: number,
      max: number,
      data: number[][],
      x: number,
      y: number
    ) => React.CSSProperties;
    cellRender?: (value: number) => ReactNode;
    title?: (value: number, unit: string, data: number[][]) => string;
  }

  const HeatMap: React.FC<HeatMapProps>;
  export default HeatMap;
} 