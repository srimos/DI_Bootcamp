# Write a while loop that keeps asking the user to enter their name. Stop the loop if the user’s input is your name.
name = input("Name: ")
while name != "Shaun":
    print("That's not my name!")
    name = input("Name: ")
    if name == "stop":
        break

print("Finished!")
