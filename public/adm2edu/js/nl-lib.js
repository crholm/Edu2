
var NL = (function() {
    var nl = {}

    return nl;

}());



// Wait On module
var NL = (function(nl) {


    function WaitOn(a1, a2){
        var count = 0;
        var callback;

        if(typeof a1 != 'undefined'){
            if(typeof a1 == 'number'){
                count = a1;
                callback = a2;
            }else{
                callback = a1;
            }

        }

        this.count = count;
        this.callback = callback;


        function notify()
        {

            if(this.count != 0){
                this.count--;
            }

            if(this.count == 0 && typeof this.callback != 'undefined'){
                this.callback();
            }
        }


        function isLockActive(){
            if(this.count != 0){
                return true;
            }
            return false;
        }

        function setCounter(newCount){
            this.count = newCount;
        }

        function setCallback(callback){
            this.callback = callback;

            if(this.count == 0){
                this.callback();
            }
        }

        function notifyer(){
            var obj = this;
            return function(){
                obj.notify();
            };
        }

        function waitFor(){
            this.count++;
            return Array.prototype.slice.call(arguments);
        }

        this.waitFor = waitFor;
        this.notifyer = notifyer;

        this.setCallback = setCallback;
        this.setCounter = setCounter;
        this.isLockActive = isLockActive;
        this.notify=notify;
    }

    nl.waitOn = function(count, callback){
        return new WaitOn(count, callback);
    }

    return nl;

}(NL || {}));





// Promise module
var NL = (function(nl) {

    function NLPromise(){

        this.list = [];
        this.data = [];

        function then(func, data){
            this.list.push(func);
            this.data.push(data);
            return this;
        }
        this.then = then;

        function next(){
            this.getNext()(Array.prototype.slice.call(arguments));

        }
        this.next = next;

        function getNext(){
            return this.list.shift();
        }
        this.getNext = getNext;


        function start(){
            this.next();
        }
        this.start = start;
    }


    nl.promise = function(func){
        var p = new NLPromise();
        if(typeof func == 'undefined'){
            return p;
        }
        return p.then(func);
    }

    return nl;

}(NL || {}));

