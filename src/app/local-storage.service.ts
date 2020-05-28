export class LocalStorage{

  user = {
      name:"",
      lastName:"",
      drink:""
  }

  newUser(){
      if(localStorage.getItem('key') === null){
          return false;
      }else{
          return true;
      }
  }


  registerName(name:string,lastName:string){
      this.user.name = name;
      this.user.lastName = lastName; 
      localStorage.setItem('key', lastName);
  }

  saveData(drink:string){
      this.user.drink = drink;
      const str = JSON.stringify(this.user);
      localStorage.setItem('key',str);

  }

  getName(){
      this.user = JSON.parse(localStorage.getItem('key'));
      return this.user.lastName;
  }

  getUsual(){
      return this.user.drink;
  }

  neverHere(){
      localStorage.clear()
      location.reload();
  }
}