export class User {
    constructor(private userId : number){}
     
    getUserId() : number {
        return this.userId;
    }
}