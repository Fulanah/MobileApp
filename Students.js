/*created by: Balqis */

class Student {
    constructor(name,matricNo,major){
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
    }

    get Name(){
      return name;
    }

    set Name(name){
        this.name = name;
    }

    get MatricNo(){
        return matricNo;
    }

    set MatricNo(matricNo){
        this.matricNo = matricNo;
    }

    get Major(){
        return major;
    }

    set Major(major){
        this.major = major;
    }

    display(String ) {
        
    }

}

let person = new Student();


module.exports = {person};