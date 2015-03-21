/**
  * Bullet that fires from robot, drones and aliens
  * @class Bullet
  */
  var Bullet = cc.Sprite.extend({
	/**
	 * Constructor
	 */
	ctor: function(owner,angle){
		this._super();
		this.initWithFile('res/images/bullet.png');

		this.owner = owner;

		this.setPosition(new cc.Point(owner.x,owner.y-4));

		//if(!owner.faceUp){
			this.setScaleX(owner.getScaleX());
			//this.vx = 10*owner.getScaleX(); //horizonal speed
			//this.vy = 0; //vertical speed
		
		if(owner.getScaleX() == -1){
			this.setRotation(angle);
		} else {
			this.setRotation(-angle);
		}
		
		//Speed by angle
		this.vx = 25*owner.getScaleX()*Math.cos(angle*(Math.PI/180));
		this.vy = 25*owner.getScaleY()*Math.sin(angle*(Math.PI/180));

		this.scheduleUpdate();
		
	},
	/**
	 * Update the bullet's status, such as position, sprite image, states
	 * @return {Void}
	 */
	update: function(){
		var pos = this.getPosition();
		var posRect = this.getBoundingBoxToWorld();
		//this.vy += this.G;
		this.setPosition(new cc.Point(pos.x+this.vx,pos.y+this.vy));
	}
});