# Rainydays school assignment.

### By Andrea Lindaas

---

## Code and preview

GitHub: https://github.com/AndreaLindaas/rainydays

Netlify: https://rainydays-andrea.netlify.app/

## Technical report

### 1. Summary

Building the website we started to design when starting this course was great. Seeing the whole process from start to finish was an eye opener into how this kind of work is done, but I would assume this was an simpler process than it will be when doing this as an employee somewhere.

One thing I noted was that when I made a design in Figma, I had no way of knowing if it was going to be hard or easy to implement it in code later. As such I would conclude that a designer with basic HTML and CSS knowledge would be preferred.

I also learned to use the tools built into Google Chrome (inspect element, mobile preview), which made rapid development easier.

Lastly I learned a lesson in the importance of dividing CSS files to keep them easier to read. More on this further down.

### 2. About the website

The website I implemented is called RainyDays and it is an online store selling jackets.

### 2.1 Development process

Last time I worked on RainyDays I did the design and wireframes in Figma. Now the work continued on into implementation using what we have learned at school.

Firstly I created an GitHub repository, cloned it into my computer and added my initial files like images, README file and dummy files for index.html and styles.css

We have learned that when developing a website, we should work on mobile first. I used Google Chrome built-in tools for mobile views using Device Toolbar.

Since all my pages will have the same header, navigation and footer I thought it would be wise to create this first in index.html. After working on and finishing this I copied index.html into the other pages I needed for my website (about, contact, product page etc). Here I learned that even though you think you are done with something, there will be some changes further down the road requiring you to edit what you did. This happened to me, so when I later had to do changes to my header, I had to do implement them in all the HTML files.

I added font from Google Fonts and icons from Font Awesome.

It was a good excercise to work on mobile first since there is less space to add elements to. This makes us think about what content is important and how to make most out of the little screen real estate we have available.

After implementing everything on mobile, I enlarged my browser to the next breakpoint I had defined. This breakpoint was 768px width. My website design is simple, so I did only implement mobile (under 768px) and desktop from 768px.

The CSS file grew large and became harder to work in. As I see it there is two ways to cope with this. Either break up css file into more files or divide the CSS into different areas in the file using commenting. I did the latter, but after finishing I wish I had divided into files instead. Lesson learned!

To keep semantic HTML I used < button> element where needed. But to make these buttons work as intended I had to break the rules:

1. To make a button navigate to other page, I put it inside an anchor tag. HTML Validator said this was not allowed, but I kept it anyway just to make it work for now since we are only using HTML.

2. In the forms I had to put < button> outside the form tag to prevent it from just submitting to the same page instead of sending me to the next page. This is also just a workaround to mimic how the page would behave when created with all available technologies in the proper way.

### 3. Resources

Besides using our curriculum and course material, I used w3schools.com and stackoverflow to find solutions to problems. I also visited various web shops to see how things were implemented.

I had help installing Prettier extension for VSCode to help me do automatic linting of files. A default .prettierrc file is also included in my Github repo.

### 4. Conclusion

This assigment made me more eager and ready to design and develop our semester assignment. I feel I have learned a great deal and a lot of tools to help me create something even better next time.
