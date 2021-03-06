/* eslint-env browser */
import registerServiceWorker, {
	ServiceWorkerNoSupportError
} from './serviceWorker';

registerServiceWorker({ scope: '/' }).then(() => {

	console.log('Success!');

	navigator.serviceWorker.addEventListener('message', (event) => {
		console.log(event.data);
	});

}).catch((err) => {

	if (err instanceof ServiceWorkerNoSupportError) {
		console.log('ServiceWorker is not supported.');
	} else {
		console.log('Error!');
	}
});
