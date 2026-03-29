let instance;
class DBConnection{
    constructor(uri){
        if(instance){
            throw new Error("You can connect to database once only.")
        }
        this.uri = uri
        instance = this
    }
    connect(){
        console.log(`DB connected at ${this.uri}`)
    }
    disconnect(){
        console.log('DB Disconnected');
    }
}
const connection = Object.freeze(new DBConnection("mongodb://..."))
export default connection