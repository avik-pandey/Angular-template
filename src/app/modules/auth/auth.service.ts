export class AuthService {
     isLogged:boolean = false;


     isAuthenticated(){
         const promise = new Promise(
             (resolve, reject) => {
                 setTimeout(() => {
                    //  console.log("1");
                    //  console.log(this.isLogged);
                    if (localStorage.getItem('key') == 'test') {
                        //     console.log(localStorage.getItem('key'));
                        //     console.log('pllllzzz');
                        //     this.router.navigate(['/members']);
                        this.isLogged = true;
                        }
                     resolve(this.isLogged)
                 },800);
             }
          
         );
         return promise;
     }
     login() {
         
         console.log('clicked');
         this.isLogged = true;
     }

     logout() {
         this.isLogged = false;

     }
}