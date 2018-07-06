# What is this ?

This is an sample repository to reproduce Safari indexed db memory leak bug.

# Usage

Launch server.

```
node .
```

Then open http://localhost:8888 with Safari.

Choose either "leaking sample" or "no leak sample".

Open Timeline of Dev Tools and begin to record.

Reload the page.

Check the memory snapshot out if window object is duplicated.

# Remarks

This bug can be reproduced in Safari 11.x of both Mac and iOS.

Lower versions of Safari may contain the same issue but not tested yet.
