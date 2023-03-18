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
export interface Property {
    _id: string
    title: string,
    adress: string,
    bedrooms: string,
    city: string,
    stage: string,
    price: string,
    size: string,
    desc: string,
    category: Category,
    type: Type,
    characteristic: Characteristic,
}
