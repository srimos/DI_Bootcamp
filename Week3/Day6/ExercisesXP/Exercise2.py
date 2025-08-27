family={
    "rick":43,
    'beth':13,
    'morty':5,
    'summer':8
}

cost={}
total=0

for x,y in family.items():
    if y<3:
        cost[x]=0
    elif y>=3 and y<12:
        cost[x]=10
    elif y>=12:
        cost[x]=15
    print("Ticket price for",x,":",cost[x])
    total=total+cost[x]

print("Total cost:",total)

print('Finished!')