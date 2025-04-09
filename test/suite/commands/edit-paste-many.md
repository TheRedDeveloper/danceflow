# 1

```
foo bar quux
^^^ 0   ^^^^ 2
    ^^^ 1
```

## 1 paste-after-select
[up](#1)

- .selections.saveText
- .edit.paste.after.select

```
foofoo barbar quuxquux
   ^^^ 0          ^^^^ 2
          ^^^ 1
```

## 1 paste-before-select
[up](#1)

- .selections.saveText
- .edit.paste.before.select

```
foofoo barbar quuxquux
^^^ 0         ^^^^ 2
       ^^^ 1
```

## 1 paste-all-after-select
[up](#1)

- .selections.saveText
- .edit.pasteAll.after.select

```
fooquuxbarfoo barquuxbarfoo quuxquuxbarfoo
   ^^^^ 0 ^^^ 2  ^^^^ 3 ^^^ 5   ^^^^ 6 ^^^ 8
       ^^^ 1         ^^^ 4          ^^^ 7
```

## 1 paste-all-before-select
[up](#1)

- .selections.saveText
- .edit.pasteAll.before.select

```
quuxbarfoofoo quuxbarfoobar quuxbarfooquux
^^^^ 0 ^^^ 2  ^^^^ 3 ^^^ 5  ^^^^ 6 ^^^ 8
    ^^^ 1         ^^^ 4         ^^^ 7
```
