import {HydrationScript,} from 'solid-js/web';
import Swiper from "./pages/Swiper";
import clientOnly from "./pages/clientOnly";

const ClientOnlySwiperComponent = clientOnly(async () => {
    return import('./pages/Swiper')
})

export default () => {
    return (
        <html lang="en" $ServerOnly>
        <head>
            <title>Solid Swiper Demo</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <script src="/src/entry-client.tsx" type="module" async/>
            <HydrationScript/>
        </head>
        <body>
        <div id="app">
            {/*<ClientOnlySwiperComponent />*/}
            <Swiper/>
        </div>
        </body>
        </html>
    );
};
