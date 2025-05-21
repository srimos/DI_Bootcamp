my_fav_numbers={1,2,3,4,5}
print(my_fav_numbers)
my_fav_numbers.add(10)
my_fav_numbers.add(100)
print(my_fav_numbers)
my_fav_numbers.remove(100)
print(my_fav_numbers)
friend_fav_numbers={6,7,8,9,50}
print(friend_fav_numbers)
our_fav_numbers =set(list(my_fav_numbers) + list(friend_fav_numbers))
print(our_fav_numbers)

print("Finished!")