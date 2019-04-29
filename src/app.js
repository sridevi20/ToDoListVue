import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
   el: "#app",
   data: {

     items : [
       {name: "Finish MVP"},
       {name: "Book appt with Gp"},
       {name: "Feed Little One"}
     ],
     newItem:  ""
   },
   methods: {
     saveItemList: function (){
       this.items.push({
         name: this.newItem
       });
       this.newItem = " ";
     }
      //  addList: function (index){
      //    this.items[index].high = true;
      // }

     }



  });


});
