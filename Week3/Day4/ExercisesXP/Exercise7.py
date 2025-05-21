fruits=input("Input your favourite fruits (as many as you want with spaces in between): ")
fruitlist=fruits.split(" ")
print(fruitlist)
fruit=input("Input the name of any fruit: ")

for f in fruitlist:
    if fruit == f:
        print("You chose one of your favorite fruits! Enjoy!")
        break
    else:
        print("You chose a new fruit. I hope you enjoy it!")
        break
    
print("Finished!")
