let order = null;

module.exports = class Order {

    static save(cart,totalone) {

        if (order === null) {
            order = { orderlist: [], totalPrice: 0};
        }
       
        order.orderlist = cart;

        order.totalPrice = totalone
       
      
    }

    static getorder() {
        return order;
    }
    static gettotal (){
        return order.totalPrice;
    }
    
   

}