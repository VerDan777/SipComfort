import $ from 'jquery';

 class Spinner  {
     constructor() {
        this.overlay = $('#overlay');
        this.OnLoad();
     }
     OnLoad() {
         $(window).on('load', ()=> {
             this.overlay.delay(1000).fadeOut('slow');
         });
     };
 };
 export default Spinner;