# Create a function named get_words_from_file that takes the file path as an argument.
def get_words_from_file():
    words = []
# This script reads words from a file named "words.txt" and stores them in a list called 'words'.
    try:
        with open("words.txt",'r') as reader:
        # print(get_words_from_file.read())
            for line in reader:
                words.append(line.strip())
            print("File read successfully")
    except FileNotFoundError:
        print("File not found")

    return words 