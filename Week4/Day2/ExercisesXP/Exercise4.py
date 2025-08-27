from random import randint

def random_number():
    i = True
    try:
        while i == True:
            YorN=str(input("To play, press 'y', if not, press 'n'."))
            if YorN == 'n':
                i = False
            elif YorN == 'y':
                number=int(input("Choose a number between 1 to 100."))
                two_numbers=[]
                if number < 1 or number > 100:
                    print("That number is outside the range. Please choose a number between 1 to 100.")
                else:
                    two_numbers.append(number)
                    print("Generating random number...")
                    random_number=randint(1,100)
                    two_numbers.append(random_number)
                    if number == random_number:
                        print(two_numbers)
                        print("Oh wow! We got the same numnber!")
                        print("Finished!")
                    else:
                        print(two_numbers)
                        print("Too bad! We did not get the same number")
                        print("Finished!")
            else:
                print("Please input a valid answer.")
    except TypeError:
        print("Enter a valid number!")
    except ValueError:
        print("Enter a valid number!")

random_number()