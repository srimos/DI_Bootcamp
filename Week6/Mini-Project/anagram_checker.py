class AnagramChecker:

    def __init__(self,word_list='sowpods.txt'):
        with open(word_list, "r") as f:
            self.words = set()
            for line in f:
                word=line.lower().strip()
                self.words.add(word)
    
    def is_valid_word(self,word):
        if not isinstance(word, str):
            return False 
        print("This is a valid English word.")
        return word.lower() in self.words
    

    def get_anagrams(self,word):
        letters=sorted(list(word))
        anagrams=[]
        for line in self.words:
            letters2=sorted(list(line))
            if letters == letters2:
                anagrams.append(line)
        return anagrams
    
    # def print_list(self):
    #     print(self.words)

anagram=AnagramChecker()
# anagram.print_list()
anagram.is_valid_word("meat")
anagram.get_anagrams("meat")