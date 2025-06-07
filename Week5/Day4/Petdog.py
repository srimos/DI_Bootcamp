import Dog
dog1=Dog("Snoopy",1,10)
print(dog1)
class Petdog(Dog):
    def __init__(self,name,age,weight):
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        print(f"{self.name}, {args[0]}, {args[1]} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {choice(tricks)}")

# Test Petdog methods
my_dog = Petdog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max")
my_dog.do_a_trick()