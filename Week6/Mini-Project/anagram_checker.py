class AnagramChecker:

    def __init__(self,word_list='sowpods.txt'):
        with open(word_list, "r") as f:
            self.words = set()
            for line in f:
                word=line.lower()
                self.words.add(line)
    
    def is_valid_word(self,word):
        if not isinstance(word, str):
            return False 
        return word in self.words

    def get_anagrams(self,word):
        letters=sorted(list(word))
        anagrams=[]
        for line in self.words:
            letters2=sorted(list(line.copy()))
            if letters == letters2:
                anagrams.append(line)
            else:
                continue

anagram=AnagramChecker("meat")