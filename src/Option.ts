export interface InterfaceOption {
  // shared
  id: string;
  type: string;
  data: any;
  width: number;
  height: number;
  title: string;
  subtitle: string;
  colors: string[];
  opacity: number;
  padding: number[]; // top, right, bottom, left
  // pie
  radius: number;
  sortDataType: string; // 升序 降序
  // percentage
  percentageHeight: number;
  percentageTop: number;
}

export interface InterfacePosition {
  // shared
  x: number;
  y: number;
}
