export class Product {
    externalId: string;
    name: string;
    description: string;
    link: string;
    price: string;
    oldPrice: string;
    imageUrl: string;
    category: string;
    gtin: string;
    sku: string;
    brand: string;
    ratingImageUrl: string;
    reviewLink: string;
    creationDate: string;
    changeDate: string;
    addToCartLink: string;
    imageLargeUrl: string;
    ratingValue: string;
    language: string;
    stock: string;
    deleted: boolean;
    visible: boolean;
    customProperties: Map[string,Object];
    specifications: undefined[];
}
