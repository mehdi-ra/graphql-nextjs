export interface IStamp {
  entityName: String;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  id: string;
  name: string;
  needsGraphicalDesign: boolean;

  // The minimum quantity user can order
  minimumQuantity: number;

  // How many times stamp viewed
  view: number;

  // Required for posting
  length: number;

  // required for posting, the unit is grams
  weight: number;
  width: number;

  // Default value is 0
  height: number;

  // The final price that customer will pay
  netPrice: number;
  description: String;

  // The default is cm, valid values are (mm, cm, m)
  lengthUnit: String;

  // The default is 'G' valid values are G, KG, P(pound)
  weightUnit: String;

  // If set to true when customer buys one it will be deducted from database
  deductFromInventory: boolean;

  status: number;
  sequence: number;
  availableFrom: Date;
  isFreeSize: boolean;
  manufacturer: String;
  discount: object;
  category: object;
  type: object;
  barcode: object;
  properties: object[];
  orders: object[];
  sizes: object[];
  image: object[];
  productImages: object[];
  tax: object;
  count: number;
  similarities: object;
  grossPrice: number;
}
