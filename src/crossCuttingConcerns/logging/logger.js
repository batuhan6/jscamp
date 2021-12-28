export class BaseLogger{   //Default Logger a genelde base denir.
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)     //log u ezdim
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

