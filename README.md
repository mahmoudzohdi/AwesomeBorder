#AwesomeBorder

The Simple Way To Make an Awesome Border in your Div Without Any Images

##Usage:


###[1] Enable Your Awesome Border :-

to enable Awesome Border Plugin you need to insert 2 Classes [AwesomeBorder , (yourSymbol)]
#### Example :
```html
<div class="AwesomeBorder ab-circle"></div>
```


###[2] What Symboles I have ??

you have 3 Symbols you can Enable one of them by their classes :- 

| Symbol name | Symbol Class |
| ----------- | ------------ |
| Circle      | ab-circle    |
| Triangle    | ab-triangle  |
| Oblong      | ab-oblong    |


###[3] Can I Set My border size , color .. etc ?? 

of course ... 

#####you have 2 choices :- 

1- just insert your classes and it will work by defult values 

2- set you custom values 

###[4] How Can I set my custom values ?

you have some Attributes to set your custom values 

| Attribute Name                | Attribute Default Value | Attribute options          |
| ----------------------------- | ----------------------- | -------------------------- |
| data-border-position          | top                     | you have 2 options to set you border position ``` top , bottom ```          |
| data-border-size              | 30                      | just put your size as a number ``` NOTE ``` this attribute mean symbol size  |
| data-border-color             | #E84C4C         | just put your color by ```Color name``` , ```color Hex``` , ```rgb``` , ```rgba```  .... As you like          |

--------------------------

#####there is two Attributes specifically to oblong symbol ONLY 

| Attribute Name                | Attribute Default Value | Attribute options          |
| ----------------------------- | ----------------------- | -------------------------- |
| data-border-height            | border-size * 1.5       | just put your spacing as a number |
| data-border-spacing           | 10                      | just put your spacing as a number  ```  NOTE ```  this attribute to put spacing between oblong symbols           |


 ``` NOTE ```  When you Choose "oblong symbol" will follows that :

symbol size = data-border-size - data-border-spacing 

so you shoulden't set  "border size value" = "border spacing value"

###[5] Support :

supported on all browsers and IE8,

``` NOTE ```  : Preferably download "CSS3 PIE" and put file "PIE.htc" into "js" folder to support "border-radius" in IE8 

you can download it from [HERE](http://css3pie.com/).


#### Dependencies

jQuery Library

you can download it from [HERE](http://jquery.com/download/).

#### License

Copyright (c) 2015 Mahmoud Alaa

and I will send a request to get the [MIT license](http://opensource.org/licenses/MIT).

so , you can considered the Licensed under the [MIT license](http://opensource.org/licenses/MIT).

#####It's For Free ^_^


Thanks  :) 
