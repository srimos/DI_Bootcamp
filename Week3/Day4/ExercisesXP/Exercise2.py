my_tuple=(1,2,3,4,5)
print(my_tuple)
a,b,c,d,e=my_tuple
print(a)
print(b)
print(c)
print(d)
print(e)
my_tups=a,b,c,d,e
my_tups.__add__(10)
print(my_tups)

print("Finished!")