import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cde463034ad244a6a6b0474eee689232',
        });
    }
}
export default AppLoader;