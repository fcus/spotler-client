import axios from 'axios';
import fs from 'fs';

async function crawl() {
    const apis = (
        await axios.get<any, any>(
            'https://restapi.mailplus.nl/integrationservice/api-docs',
        )
    ).data.apis;

    const details = (
        await Promise.all(
            apis.map((api: any) =>
                axios.get(
                    `https://restapi.mailplus.nl/integrationservice/api-docs${api.path}`,
                ),
            ),
        )
    ).map((n: any) => n.data);

    fs.writeFileSync('api.json', JSON.stringify(details, null, 4));
}

crawl();
