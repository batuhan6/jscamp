import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js" //modal loader duzgun calismiyor. //Sonuna .js eklemen gerekiyor 

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)  //bunu yazdiktan sonra enter a bas. Otomatik ekliyor import u

let user1 = new User(1,"b","b","Ankara")
let user2 = new User(2,"a","a","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




let customer = {id:1, firstName:"Sandra"}

//prototyping
customer.lastName = "baykal"

console.log(customer.lastName)