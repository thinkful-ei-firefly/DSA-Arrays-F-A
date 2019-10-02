2. Explore the push() method

What is the length, capacity and memory address of your array?
length: 1,
capacity: 3,
memory address: 0

Add the following in the main function and then print the array:
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

length: 6   ->  There are 6 number
capacity: 12  ->  Each time that is over capacity, it should be triple of the size of memory allocated.
memory address: 3 ->  After resize capacity the pointer is moving to current pointer + the last capacity.

3. What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code. 

 length: 3, -> length is decreased each time we call pop method.
 capacity: 12, -> pop method does not change capacity.
 address: 3 -> pop method does not change address.

