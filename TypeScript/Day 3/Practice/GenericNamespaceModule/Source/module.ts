// Importing paricular module

import { Emp } from "../../../../Day 2/Practice/ClassFuncEnumInterface/Source/class";
let ii = new Emp(10,"jeeet")
console.log(ii);

// Renaming an Export from a Module
import { Emp as practice } from "../../../../Day 2/Practice/ClassFuncEnumInterface/Source/class";
let jj = new practice(15,"rooobo");
console.log(jj.getsal());