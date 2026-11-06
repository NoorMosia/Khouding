using System;

class Program
{
    static void Main()
    {
        // Prompt "Enter the quantity:" on its own line, read it as a whole number.
        // Two paths:
        //   if the quantity is 0, print: nothing to pack
        //   otherwise compute how many boxes of 10 are needed and print that number.
        //     A partial box still needs a whole box, so round up:
        //     boxes = (quantity + 9) / 10   (integer division drops the remainder)
    }
}
