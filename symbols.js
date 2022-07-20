class Counter {
    counter;
    dictionary = {
        INCREASE: Symbol("INCREASE"),
        DECREASED: Symbol("DECREASED"),
        DEFAULT: Symbol("DEFAULT"),
    };

    constructor(){
        this.counter = 0;
    }

    get [Symbol.toStringTag](){
        return `Counter(${this.counter})`;
    }

    *[Symbol.iterator](){
        for(let i = 0; i < this.counter; i++)
            yield i;
    }

    dispatch(action, state){
        switch(action){
            case this.dictionary.INCREASE:
                this.counter += 1;
            break;
            case this.dictionary.DECREASED:
                this.counter -= 1;
            break;
            case this.dictionary.DEFAULT:
                this.counter = 0;
            break;
        }
    };
}

const c = new Counter();

console.log(Object.prototype.toString.call(c));

c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
c.dispatch(c.dictionary.INCREASE);
console.log(Object.prototype.toString.call(c));

console.log(...c);

c.dispatch(c.dictionary.DECREASED);
console.log(Object.prototype.toString.call(c));

c.dispatch(c.dictionary.DEFAULT);
console.log(Object.prototype.toString.call(c));

