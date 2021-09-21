import axios from "axios";

class HelloWorldService {
    executeHelloWorldService(name) {
        // return axios.get("http://localhost:8080/hello-world");
        return axios.get("http://localhost:8080/hello-world-bean");

        // return axios.get(`http: //localhost:8080/hello-world/path-variable/${name}`);
        // console.log("execute")
    }
}
export default new HelloWorldService();