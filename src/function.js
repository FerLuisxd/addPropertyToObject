

  /**
   * Adds property to an especific index.
   * @param {Object} obj Object to modify
   * @param {Object} newProps New properties to be added
   * @param {number} index Index to add the newProps
   */
function addPropertyToObjectWithIndex(obj, newProp, index) {
    index = Number(index);
    console.log('index',0)
    if (!(newProp instanceof Object) || !(obj instanceof Object))
        throw "First and Second params must be Object types";
    if (typeof index != "number") throw "Third param must be a number";
    let clone = obj;
    let newObj = {};
    arr = Object.keys(clone);

    arrNewProp = Object.keys(newProp);
    if (index > arr.length|| index < 0) throw "Index out of bounce";
    arr.push(arr[arr.length-1]);
    try {
        arr.forEach((x, i) => {
            if (i == index) {
                arrNewProp.forEach(elem => {
                    newObj[elem] = newProp[elem];
                });
                newObj[x] = obj[x]
            }
            else if (i < index) {
        
                newObj[x] = obj[x];
            }
            else if(i> index){
                newObj[x] = obj[x]
            }
        });
        return newObj;
    } catch (e) {
        console.error(e);
        console.error("Error ocurred, returning original Object");
        return obj;
    }
}

module.exports = addPropertyToObjectWithIndex