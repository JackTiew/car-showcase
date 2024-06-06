import HttpRequest from '../libraries/HttpRequest';

abstract class ServiceBase {
    private req = new HttpRequest();

    protected get request() {
        return this.req;
    }
}

export default ServiceBase;