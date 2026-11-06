# Pool p20, Fix the sentinel (8.2)

**Family G.** Starter uses IndexOf result without checking -1. Fix: guard with != -1, print "not found" when
absent.
