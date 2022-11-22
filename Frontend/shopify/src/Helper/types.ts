export type dataType = {
    color: string,
    currency : string,
    gender : string,
    id : number,
    imageURL : string,
    name: string,
    price : number,
    quantity : number,
    type : string,
    qty?: number,
}[]|undefined;

export type dataTypeProductContext = {
    color: string,
    currency : string,
    gender : string,
    id : number,
    imageURL : string,
    name: string,
    price : number,
    quantity : number,
    type : string,
    qty?: number,
}[];

export type dataTypeContext = {
    color: string,
    currency : string,
    gender : string,
    id : number,
    imageURL : string,
    name: string,
    price : number,
    quantity : number,
    type : string,
    qty: number,
};

export interface productStateType {
    productData : dataTypeProductContext,
    filteredData : dataTypeProductContext,  
}