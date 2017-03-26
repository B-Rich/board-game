function Card(image,description,tec){
	this.image=image;
	this.description=description;
	this.faceup=0;
	this.tec=tec;
}
function Unit(attack,damage,cost){
	Card.call(this,image,description,tec);
	this.attack=attack;
	this.damage=damage;
	this.cost=cost;
	this.tapped=0;
}
function Terrain(high,cover){
	Card.call(this,image,description,tec);
	this.high=high;
	this.cover=cover;
}
function Resource(){
	Card.call(this,image,description,tec);
	this.tapped=0;
}
function Special(effect,target,cost){
	Card.call(this,image,description,tec);
	this.effect=effect;
	this.target=target;
	this.cost=cost;
}
