# 1

```
foo
^ 0
bar
baz
qux
```

## 1 copy
[up](#1)

- .selections.copy

```
foo
^ 0
bar
^ 1
baz
qux
```

### 1 copy x
[up](#1-copy)

- .selections.copy

```
foo
^ 0
bar
^ 1
baz
^ 2
qux
```

# 2

```
aaa aaa aaa
  bb bb bb bb
   ^ 0     ^^ 1
    cc cc cc cc
      ddd
     ee
    f
  gg gg gg gg gg
```

## 2 copy
[up](#2)

- .selections.copy

Basic copy with multiple selections.

```
aaa aaa aaa
  bb bb bb bb
   ^ 0     ^^ 1
    cc cc cc cc
   ^ 2     ^^ 3
      ddd
     ee
    f
  gg gg gg gg gg
```

### 2 copy x
[up](#2-copy)

- .selections.copy

Skip a line because it's too short.

```
aaa aaa aaa
  bb bb bb bb
   ^ 0     ^^ 1
    cc cc cc cc
   ^ 2     ^^ 3
      ddd
   ^ 4
     ee
    f
  gg gg gg gg gg
           ^^ 5
```

#### 2 copy x x
[up](#2-copy-x)

- .selections.copy

Do not add selections after the end of the document.

```
aaa aaa aaa
  bb bb bb bb
   ^ 0     ^^ 1
    cc cc cc cc
   ^ 2     ^^ 3
      ddd
   ^ 4
     ee
   ^ 5
    f
  gg gg gg gg gg
           ^^ 6
```

# 3

```
ab
  ^ 0
cd
efg
hi
```

## 3 copy
[up](#3)

- .selections.copy

```
ab
  ^ 0
cd
  ^ 1
efg
hi
```

### 3 copy x
[up](#3-copy)

- .selections.copy

```
ab
  ^ 0
cd
  ^ 1
efg
  ^ 2
hi
```
