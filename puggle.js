class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Puggle extends Dog {
  constructor(name) {
    super(name);
    this.isCute = true;
  }
}

export default Puggle;