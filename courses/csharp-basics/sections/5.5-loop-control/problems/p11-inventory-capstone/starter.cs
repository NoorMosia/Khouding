using System;

class Program
{
    static void Main()
    {
        // Prompt "Enter count, threshold, then quantities:" on its own line.
        // Read n, the threshold, then n quantities. Scan in order:
        //   at the first quantity == 0, record its 1-based position and break.
        //   count "low" quantities (> 0 and < threshold); continue past healthy ones (>= threshold).
        // Print two lines: the low-stock count, then the first-zero position (0 if none).
    }
}
