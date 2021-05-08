Question

When do I NOT build my own data structure(DS)

ShortAns:

When I have the primitive DS can use _in the given context_

LongAns:

Story:
I use JS set DS to prevent re-entry a certain function to avoid multiple calls to performance.mark & performance.measure.

Since I am listening to a whole bucket of object that will update more time than I need, which means I only want to update when one particular id update in that object, but the callback will invoke every time _any_ of the id is update in that object

The lesson here is that I shall check first if the primitive API (performance in this case) provide API to do the checking than just build on my own DS.
