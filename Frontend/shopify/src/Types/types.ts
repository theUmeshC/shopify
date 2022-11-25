export type dataType = Array<{
  color: string
  currency: string
  gender: string
  id: number
  imageURL: string
  name: string
  price: number
  quantity: number
  type: string
  qty?: number
}> | undefined;

export type dataTypeProductContext = Array<{
  color: string
  currency: string
  gender: string
  id: number
  imageURL: string
  name: string
  price: number
  quantity: number
  type: string
  qty?: number
}>;

export interface dataTypeContext {
  color: string
  currency: string
  gender: string
  id: number
  imageURL: string
  name: string
  price: number
  quantity: number
  type: string
  qty: number
}
export type ItemType = {
  color: string
  currency: string
  gender: string
  id: number
  imageURL: string
  name: string
  price: number
  quantity: number
  type: string
  qty: number
} | undefined;

export interface productStateType {
  productData: dataTypeProductContext
  filteredData: dataTypeProductContext
}

export type funType = (val: boolean) => void;
