* Binary Search involves iterating through a list of items in search of a target value.

* This technique involves an already sorted list in order to compare whether the target value lies to the left or right of the middle value

* The middle value as mentioned above refers to the median element in the list as this will be the determinant to which side target will lie

For instance, take the list [1,2,3,4,5,6,7]; and a target 6; the median value will be 4.
We can automatically discard 4 and all the values to the left of 4 since in a sorted list, 6 could NEVER exist to the left of 4 ( 6 is larger therefore surely it must lie to the right side of 4 right ?) 
Take a minute to internalize that

* The technique involves locating the middle point in the list and discarding the half that our target could never lie in. This is done while we adjust either the start or end value depending on which side our target lies.

* We continue this process up until the element is found || the list is fully iterated and the element !exist
