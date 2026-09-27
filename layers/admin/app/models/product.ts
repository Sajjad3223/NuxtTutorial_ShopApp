export interface CreateProductCommand{
    title:string;
    shortDescription:string;
    description:string;
    price:number;
    discount:number;
    image:string;
}

export interface EditProductCommand{
    title:string;
    shortDescription:string;
    description:string;
    price:number;
    discount:number;
    image:string;
}