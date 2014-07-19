NEXT: A meteor boilerplate
====

Next is a boilerplate modelled after the creation of [Storyline](http://storyline.io). Great for node developers who are used to stylus and jade.

Packages:

* iron-router
* collection2
* accounts-password
* accounts-entry
* font-awesome
* jade
* stylus

### Modularity

This boilerplate prioritize modularity. There are 3 different environments - Client, Server, & Common. Each of these folders have a ````lib```` folder to store functions that can be reused throughout their environments. 

Views are separated into 4 folders: reusable ````components````, ````dynamic```` pages, ````static```` pages for showing things like terms and conditions, and ````layouts```` for storing iron-router layouts.

### Security

This boilerplate removes the insecure and autopublish package. Using collection2, define your schema to allow values into your database, and use allow / deny rules for permissions. 


### Sample files
This boilerplate uses a sample collection ````items```` that sets up a few fields just for example purposes. I deliberately did not include too many sample files and code so that its easy for you to set up your own.

### Styling
Each project's styles are unique and you may want to define your own styles and ui frameworks (bootstrap, foundation, semantic-ui, etc) That is the reason why I did not include any ui frameworks here. You may also wish to build your own bootstrap styles.