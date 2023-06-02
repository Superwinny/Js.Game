/**********************************************************/
/******** Enemy  **************/
/**********************************************************/

class Enemy {
        #ptnVie;
        #imgURL;
        #arme;
        #faiblesseAttack;
        #degats; 
 
     constructor(ptnVie, imgURL,  arme, faiblesseAtttack, degats) {
         this.#ptnVie = ptnVie;
         this.#imgURL = imgURL;
         this.#arme = arme;
         this.#faiblesseAttack = faiblesseAtttack;
         this.#degats = degats;
       }
 
 /******** GET  **************/  
 

 get degats(){
   return this.#degats;
 }
 get typeAttack(){
   return this.#typeAttack;
 }
 get arme(){
   return this.#arme;
 }
 get img(){
   return this.#imgURL;
 }
 get ptnVie()
 {
   return this.#ptnVie;
 }  
 get faiblesseAtttack()
 {
   return this.#faiblesseAtttack;
 }  
 
 
 
 afficher(pvEnemyElement,degatsEnemyElement,armeEnemyElement,faiblesseEnemyElement){
    pvEnemyElement.textContent =  'Point de vie' + this.ptnVie;
    degatsEnemyElement.textContent =  'Dégats ' + this.degats;
    armeEnemyElement.textContent =  'Arme ' + this.arme;
    faiblesseEnemyElement.textContent =  'Faiblesse ' + this.faiblesseAttack;
 
 }
 
     attaquer() {
    //    let degats = Math.floor(Math.random() * 10) + 1;
     
     }
 
     
 }  
      
   
 
 
 /**********************************************************/
 /******** Guerrier **************/
 /**********************************************************/
 
 class Guerrier extends Enemy {
     constructor() {
       super();
       
     }
   
 
     attaquer() {
    
     }
   }
 
 
 /**********************************************************/
 /******** Mage **************/
 /**********************************************************/
 
 class Mage extends Enemy {
     constructor() {
       super();
       
     }
 
     attaquer() {
    
     }
   }
 
 
 /**********************************************************/
 /******** Chasseur **************/
 /**********************************************************/
 
 class Chasseur extends Enemy {
     constructor() {
       super();
       
     }
 
     attaquer() {
      
     }
   }
