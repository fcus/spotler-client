export interface SpotlerClientGetArgs {
    endpoint: string;
    query?: { [keyof: string]: string };
}
