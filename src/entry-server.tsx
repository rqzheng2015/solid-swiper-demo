import {renderToString, renderToStringAsync} from 'solid-js/web';
import App from './App';

export function render() {
    return renderToString(() => <App/>);
}
