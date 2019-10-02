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

4. Understanding more about how arrays work

Print this 1 item that you just added. What is the result? Can you explain your result?
The result is Nan because the Array just allow just number, we can see it in the memory constructor when we declare memory = Float64Array(1024)

What is the purpose of the resize() function in your Array class?
It reserve new portion of memory to increase current portion and we can store more information.
