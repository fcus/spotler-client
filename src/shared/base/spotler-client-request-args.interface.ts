import { HttpMethod } from '../http-method.type';

export interface SpotlerClientRequestArgs {
    endpoint: string;
    method: HttpMethod;
    params?: { [keyof: string]: string };
}
