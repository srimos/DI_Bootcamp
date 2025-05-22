magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        print(magician)

show_magicians()

def make_great(magician_names):
    magician_names2=[]
    for magician in magician_names:
        magician_names2[0]=magician,"The Great"
        magician_names.append("the Great")

make_great(magician_names)
show_magicians()

print("Finished!")