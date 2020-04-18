class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        try{
            this.observers.push(f);
        }catch(err){
            console.log(err)
        }
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        try{
            if (data || data instanceof String)
                this.observers.forEach(observer => observer(data));
        }catch(err){
            console.log(err)
        }
        
    }
}
