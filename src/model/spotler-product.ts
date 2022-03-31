import { SpotlerMapStringObject } from './spotler-map-string-object';
import { SpotlerProductSpecification } from './spotler-product-specification';

export class SpotlerProduct {
    externalId!: string;
    name!: string;
    description!: string;
    link!: string;
    price!: string;
    oldPrice!: string;
    imageUrl!: string;
    category!: string;
    gtin!: string;
    sku!: string;
    brand!: string;
    ratingImageUrl!: string;
    reviewLink!: string;
    creationDate!: string;
    changeDate!: string;
    addToCartLink!: string;
    imageLargeUrl!: string;
    ratingValue!: string;
    language!: string;
    stock!: string;
    deleted!: boolean;
    visible!: boolean;
    customProperties!: SpotlerMapStringObject;
    specifications!: SpotlerProductSpecification;
}
