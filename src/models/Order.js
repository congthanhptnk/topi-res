class Order {
  constructor(foodItem) {
    this.amount = 1;
    this.foodItem = foodItem;
  }

  increment = () => {
    this.amount++;
  };

  decrement = () => {
    this.amount--;
  };

  get total() {
    return this.amount * this.foodItem.price;
  }

  get object() {
    return {amount: this.amount, foodItem: this.foodItem};
  }
}

export default Order;
