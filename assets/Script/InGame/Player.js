
var Player = cc.Class({
    extends: cc.Component,

    properties: {
        f_speed: 10,
        b_isLeftDown: false,
        b_isRightDown: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

   
    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.KEY.a:
                this.b_isLeftDown = true;
                break;

            case cc.KEY.d:
                this.b_isRightDown = true;
                break;
        }
    },

    onKeyUp: function (event) {
        switch(event.keyCode) {
            case cc.KEY.a:
                this.b_isLeftDown = false;
                break;

            case cc.KEY.d:
                this.b_isRightDown = false;
                break;
        }
    },

    update(dt){
        if(this.b_isLeftDown){
            this.node.x -= this.f_speed;
        }

        if(this.b_isRightDown){
            this.node.x += this.f_speed;
        }
        var adfa = new Player;
    },
});
