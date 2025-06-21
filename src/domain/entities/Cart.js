class Cart{
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
    
    getItems() {
        return this.items;
    }
    
    clear() {
        this.items = [];
    }
}