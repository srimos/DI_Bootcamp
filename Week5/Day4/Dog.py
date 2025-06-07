class Dog:
    def __init__(self, name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight

    def bark(self):
        return f'{self.name} is barking.'

    def run_speed(self):
        self.speed=self.weight / self.age * 10
        return self.speed

    def fight(self, other_dog):
        fight_stats1=self.run_speed() * self.weight
        fight_stats2=other_dog.run_speed() * other_dog.weight
    
        if fight_stats1 > fight_stats2:
            print (f"{self.name} wins!")
        else:
            print (f"{other_dog.name} wins!")