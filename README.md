
1️⃣ What is the difference between var, let, and const?
Ans: 
    1.var, এর বৈশিষ্ট্য:
        1.Function scoped.
        2.Re-declare করা যায়।
        3.Re-assign করা যায়।
        4.Hoisting হয় (value `undefined` থাকে)।
    
   2.let এর বৈশিষ্ট্য:
        1.Block Scoped.
        2.Re-declare করা যায় না।
        3.Re-assign করা যায়।
        4.Hoisting হয়, কিন্তু আগে ব্যবহার করলে error দেয়।

   3.const এর বৈশিষ্ট্য:
        1.Block Scoped.
        2.Re-declare করা যায় না।
        3.Re-assign করা যায় না।
        4.Declare করার সময়ই value দিতে হবে।