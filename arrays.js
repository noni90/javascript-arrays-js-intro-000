var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function addElementToBeginningOfArray(array, element)
{
   array.unshift(element);
   return array;
}
 function addElementToEndOfArray(array, element)
 {
   return [...array,element];
 }
 function addElementToEndOfArray(array, element)
 {
   array.push(element);
   return array;
 }
