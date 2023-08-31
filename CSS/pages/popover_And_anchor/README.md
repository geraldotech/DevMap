# PopOver API

### Basic:

```html
<button type="button" popovertarget="info">i</button>
<div id="info" popover>Extra content</div>
```

```css
[popover] {
  inset: unset; /* remove default styles */
}
```

PopOver API + Anchor

```css
 [popover] {
        inset: unset;
        bottom: anchor(top);
        left: anchor(center);
        translate: -50%;
        margin: 0.25rem 0;
}


<button type="button" id="btn" popovertarget="info">click me</button>
<div id="info" popover anchor="btn">Extra content</div>

```

## Using class

define a button class

```html
<button type="button" class="information" popovertarget="info">click me</button>
```

```css
.information {
  anchor-name: --i-btn;
}

[popover] {
  anchor-default: --i-btn;
}
```

or instead anchor-default

```css
[popover] {
  inset: unset;
  bottom: anchor(--i-btn top);
  left: anchor(--i-btn center);
}
```
