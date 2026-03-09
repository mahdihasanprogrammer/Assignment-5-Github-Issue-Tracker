
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
     



2️⃣ What is the spread operator (...)?
ans:
     Spread Operator (...) হলো JavaScript-এর একটি অপারেটর যা array বা যে কোন ইটারেবল 
     data এর ভেতরের উপাদানগুলোকে আলাদা করে ছড়িয়ে দেয়।
     আরেকটু সহজভাবে বললে : 
               Spread Operator (...) ব্যবহার করে array বা যে কোন ইটারেবল 
               data এর ভেতরের উপাদানগুলোকে আলাদা করা যায়।
               
#Spread Operator (...) ব্যবহার করে array কে কপি, মার্জ করা যায়। আবার Math function এ ও ব্যবহার করা যায়।  আবার object এর properties কে ও Spread Operator (...) ব্যবহার করে copy , marge করা যায়।






3️⃣ What is the difference between map(), filter(), and forEach()?
ans:

১.map():
          একটা আ্যারের সব উপাদান দিয়ে যদি কোন কাজ করার প্রয়োজন হয় তখন map() ব্যবহার করা হয়।  
          আর map() রেজাল্ট হিসাবে একটা আ্যারে রিটার্ন করে। 
          যেমন : যদি আ্যরের সব উপাদান কে ডাবল করার প্রয়োজন হয়, এবং রেজাল্ট এর প্রয়োজন হয়,  তখন map() ব্যবহার করে আ্যরের সব উপাদানকে ডাবল করে নতুন একটা আ্যরেতে রেজালট হিসাবে পাওয়া যায়। 


২.filter():
          filter() ও map() এর ন্যয় নতুন একটা array return করে। তবে filter() use করার জন্য condition দিতে হয়, যে যে উপাদান গুলো condition অনুযায়ী হবে, সেইগুলোকে filter()  নতুন একটা array তে      result হিসেবে return করে।


৩.forEach(): 
          forEach ও  map() এর মতো সব array elements নিয়ে কাজ করে, কিন্তু result return করে না।





4️⃣ What is an arrow function?
ans:
     Arrow Function হলো JavaScript-এ function লেখার short method; 
     arrow function লেখার system,      for example:    const name =()=>{};

Arrow function লেখার কিছু সুবিধা:
     1.Code কম লেখা লাগে
     2.Code যদি one line এ লেখা যায়, তাহলে আলাদা করে return keyword দিতে হয় না
     3.Code clean ও readable হয়



5️⃣ What are template literals?
Ans:
     Template Literals হলো backtick  ব্যবহার করে JavaScript এ string লেখার একটি পদ্ধতি,

Template Literal ব্যবহার  এর সুবিধা:
     1.Multiple line এ code লেখা যায়
     2.String এর ভিতরে dynamic value দেওয়া যায়
     