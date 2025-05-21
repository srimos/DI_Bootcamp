print("Welcome to Cinemax!","Here are the ticket prices:","Free for people under 3.","$10 for people aged 3 to 12.","$15 for anyone over 12.","Enter your name and age of each person.")

family=[]
age=[]
cost=[]
active1=True
active2=True

while active1:
    active2=True
    f=input("Enter your name: ")
    family.append(f)
    print(family)
    a=int(input("Enter your age: "))
    age.append(a)
    print(age)
    if a > 12:
        c=15
    elif a >= 3:
        c=10
    else:
        c=0
    cost.append(c)
    print(cost)
    while active2:
        add=input("Add another person [yes/no]?")
        if add == "yes":
            active2=False
        elif add == "no":
            active1=False
            break
        else:
            print("Type 'yes' or 'no'.")

print(family,age,cost)
total=sum(cost)
print("Total cost of movie tickets: $",total)        

print("Finished!")