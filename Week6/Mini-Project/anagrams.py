def anagram():
    while True:
        choice=input("Welcome the Anagram Checker. Would you like to input a word? (y/n)")
        if choice == 'n':
            break
        elif choice != 'y':
            print("Please input 'y' or 'n'.")
            continue
        while True:
            word=input("Please input a word.")
            if ' ' in word[1:-1]:
                print("Input only one word please")
                continue
            elif word.isalpha()==False:
                print("Only letters allowed please.")
                continue
            word=word.lower().strip()
            break
        break

anagram()