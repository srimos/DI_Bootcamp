print("You are ordering a pizza. The base price is $10. Each topping costs $2.50. Type 'quit' when you are finished.")

active = True
pizza=[]

while active:
    topping=input("Choose your topping: ")
    if topping == "quit":
        active = False
    else:    
        print("Adding",topping,"to your pizza.")
        pizza.append(topping)   

print(pizza)
cost=10+len(topping)*2.5
print("Total cost of pizza: $",cost)         