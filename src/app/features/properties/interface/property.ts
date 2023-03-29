export interface Category {
    _id: string,
    category: string
}
export interface Type {
    _id: string,
    type: string
}
export interface Characteristic {
    _id: string,
    name: string
}
export interface Image{
    url:string,
    id:string
}
export interface Property {
    _id: string
    title: string,
    adress: string,
    bedrooms: string,
    status:boolean,
    city: string,
    stage: string,
    price: string,
    size: string,
    desc: string,
    images:Image[]
    category: Category,
    type: Type,
    characteristic: Characteristic,
}
