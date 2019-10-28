FA Test

## run

`npm run start`

## Requiremets to build

- node
- typescript
- ts-node for development

## build

`npm run build`

## Notes

#### What I will do better?:

Change callbacks in TS to promises. Something I found initially challenging to make it work with node readline module due to is lack of docs at the official site. I decided to move on for the progress of delivery.

Addional it will be better if when the robot moves outside boundaries of the arena the position is constrains to the arena size so ignores any other M instructions. Also once Wreked we can halt the instruction set.

#### Input cases

For the case: 3 4 N
Moves: LMLMLMLMM
expected results: 3 0 W

This is wrong due to the fact that you can see that the robot starts at N and rotate 4 times to the left which results in
L1=W
L2=S
L3=E
L4=N

The corerct result for this is: **3 5 N**

### Example Output:

```
Please insert size of Arena (x y): 7 6
[ '7 6' ]
Insert Robot initial Position (x , y, D[N,S,E,W]): 2 4 E
[ '2 4 E' ]
Inseert Robot Movement instructions (sequence of [L,R,M] example: LMLMLMLMM): MMRMMRMRRM
[ 'MMRMMRMRRM' ]
Insert Robot initial Position (x , y, D[N,S,E,W]): 3 4 N
[ '3 4 N' ]
Inseert Robot Movement instructions (sequence of [L,R,M] example: LMLMLMLMM): LMLMLMLMM
[ 'LMLMLMLMM' ]
** Results **
Robot A
4 2 E
Robot B
3 5 N

```
