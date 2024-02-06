# Mama Lang

## Documentation 📚

### Variables Declaration 📌 
Variables can be declared using `mama aida hoilo`;

```python
mama aida hoilo day = "Sunday";
mama aida hoilo temperature = 25;
mama aida hoilo isSunny = haw mama;
mama aida hoilo counter = 0;
```

### Types 🔠
Numbers and strings are like other languages. Null values can be denoted using `kisuina mama`. `haw mama` and `nah mama` are the boolean values.

```python
 mama aida hoilo a = 10;
 mama aida hoilo b = 10 + (15*20);
 mama aida hoilo c = "duita";
 mama aida hoilo d = 'acha thikasey';
 mama aida hoilo e = kisuina mama;
 mama aida hoilo f = haw mama;
 mama aida hoilo g = nah mama;
```

### Built-ins 🛠️

Use `bol toh mama` to print anything to the console.

```python
bol toh mama ("Hello World");
```

```python
mama aida hoilo manushJon = 5;
mama aida hoilo koiGhontaKoraLagbe = 8;
mama aida hoilo shobMilayaKotoKhonLagbe = manushJon * koiGhontaKoraLagbe;
bol toh mama("Shob miliya koto ghonta kamla khatesi amra hoilo = " + shobMilayaKotoKhonLagbe);
```

## Conditionals 🔄

mama-lang supports the if-else-if ladder construct, `jodi mama` block will execute if the condition is `haw mama`, otherwise one of the subsequently added `nah hoile mama` blocks will execute if their respective condition is `haw mama`, and the `akdom e nah hoile` block will eventually execute if all of the above conditions are `nah mama`.

```python
mama aida hoilo temperature = 25;
jodi mama (temperature > 30) {
  bol toh mama ("Gorom lagtese mama, AC chalao mama!");
} nah hoile mama (temperature < 20) {
  bol toh mama ("Thanda lagtese mama, sweater porum mama!");
} akdom e nah hoile {
  bol toh mama ("Aajke weather besh comfortable, mama!");
}
```

## Loops 🔁

Statements inside `jotokhon porjonto mama` blocks are executed as long as a specified condition.


```python
  mama aida hoilo a = 0;
  jotokhon porjonto mama (a < 10) {
   a += 1;
   bol toh mama(a);
  }
  
```
## Function 📦

`mama kam da hoilo` is a function and `de toh mama` is the return of function. When we need return, we use `de toh mama`.

```python
mama kam da hoilo multiply(x, y) {
    de toh mama (x * y);
}

mama aida hoilo result = multiply(3, 4);
bol toh mama("The result is: " + result); 
            
```
