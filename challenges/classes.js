// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
	constructor(attrs){
		this.length = attrs.length;
		this.width = attrs.width;
		this.height = attrs.height;
	}
}

class Cuboid extends CuboidMaker {
	constructor(attrs){
		super(attrs);
	}
	surfaceArea(length, width, height) {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}

	volume(length, width, height){
		return length * height * width;
	}
}

const cuboid = new Cuboid({
	length: 10,
	width: 10,
	height: 10
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(10, 10, 10)); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.