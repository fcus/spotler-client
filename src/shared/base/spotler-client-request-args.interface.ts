import { HttpMethod } from '../http-method.type';

export interface SpotlerClientRequestArgs {
    endpoint: string;
    method: HttpMethod;
    query?: { [keyof: string]: string };
}
