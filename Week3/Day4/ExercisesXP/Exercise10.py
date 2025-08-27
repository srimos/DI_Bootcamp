sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]

for sandwich in sandwich_orders:
    if sandwich == "Pastrami":
        sandwich_orders.remove("Pastrami")

finished_sandwiches=[]
i=0
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    print("I made your",sandwich,"sandwich")
print(finished_sandwiches)