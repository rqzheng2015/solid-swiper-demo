import {renderToStream} from 'solid-js/web';
import App from './App';

export async function render() {
    return renderToStream(() => <App/>);
}

