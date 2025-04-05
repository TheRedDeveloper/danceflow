# 1

> behavior <- character

```
abc def
  ^ 0
```

## 1 modify-before
[up](#1)

- .modes.modify.before

```
abc def
  | 0
```

### 1 modify-before restore
[up](#1-modify-before)

- .modes.set.move

```
abc def
  ^ 0
```

## 1 modify-after
[up](#1)

- .modes.modify.after

```
abc def
   | 0
```

It would be nice to test the `restore` version too, but right now this does not
work in tests because tests don't work too well with saved selections.

# 2

> behavior <- character

```
abc
def
 ^ 0
ghi
```

## 2 modify-next-line-below
[up](#2)

- .edit.newLine.below.modify

```
abc
def

| 0
ghi
```

It would be nice to test the `restore` version too, but right now this does not
work in tests because tests don't work too well with saved selections.

## 2 modify-next-line-above
[up](#2)

- .edit.newLine.above.modify

```
abc

| 0
def
ghi
```

It would be nice to test the `restore` version too, but right now this does not
work in tests because tests don't work too well with saved selections.
