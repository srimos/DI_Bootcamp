a=1.5
my_list1=[]
       
while a < 5.5:
    my_list1.append(a)
    a=a+1

b=2
my_list2=[]

while b < 5.5:
    my_list2.append(b)
    b=b+1

my_list= sorted(my_list1 + my_list2)  

print(my_list)
print("Finished!")

