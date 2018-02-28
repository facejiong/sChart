export interface InterfaceOption {
  // shared
  id: string;
  type: string;
  subType: string;
  data: any;
  width: number;
  height: number;
  colors: string[];
  padding: number[]; // top, right, bottom, left
  // pie
  radius: number;
  innerRadius: number;
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
