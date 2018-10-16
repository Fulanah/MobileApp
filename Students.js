/*created the class: Balqis */
//edit getter by adding 'this' when return : mizi

class Student {
    constructor(name,matricNo,major){
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
    }

    get Name(){
      return this.name;
    }

    set Name(name){
        this.name = name;
    }

    get MatricNo(){
        return this.matricNo;
    }

    set MatricNo(matricNo){
        this.matricNo = matricNo;
    }

    get Major(){
        return this.major;
    }

    set Major(major){
        this.major = major;
    }

    display(String ) {
        
    }

}


//edit export code & create object 'person' : mizi
let person = new Student();
module.exports = {person};