new Vue({
  el: "#app",
  data: {
    faq: [
      {
        heading: "Submitting themes/being added to theme maker’s list",
        data: [
          {
            question: "Why are you not reblogging my themes?",
            answer: [
              "To promote diversity and originality, we do not reblog themes that look too similar to theme bases or to an already existing theme.",
              "We tend not to reblog a theme maker’s first couple of themes unless they are distinctly different. This is to ensure that the themes are not stolen.",
              "Your theme does not fit on major screen resolutions or is dysfunctional.",
            ],
          },
          {
            question: "Can I submit my themes? How do I submit my themes?",
            answer: [
              "You can submit your themes via the submit page. Please only submit a link to a post on your blog rather than the screencap and info.",
            ],
          },
          {
            question: "Can I be added to the theme maker’s list?",
            answer: [
              "Yes, as long as the work is 100% originally yours. You may use base codes but other than that you need to have original content. We tend to only add theme makers to the list if they have at least 5 themes.",
              "We do this to make sure that we are promoting active theme makers that won’t disappear right away.",
            ],
          },
          {
            question: "Why haven’t I been added to the list yet?",
            answer: [
              "We only update the list periodically because we update the status of theme makers as well as change URLs to those applicable. So if you have changed your URL please make sure it redirects as we don’t have time to update everyone every day. ",
            ],
          },
        ],
      },
      {
        heading: "Troubleshooting",
        data: [
          {
            question:
              "I can’t get the codes for...<br/>It says I need a password for the codes for...<br/>Where is the codes for…Why are the codes private/deleted/protected…",
            answer: [
              "If you can’t find their themes, most likely they’ve taken down their themes. The best place to check is the theme maker’s blog. Don’t immediately ask them for the codes - have a quick look and see if they have an explanation. If the theme(s) have been taken down by the theme maker, try and find something else because seeing out and using a taken down theme would be rather rude seeing it goes against the theme maker’s wishes most of the time.",
              "If there is a password on the theme do not ask us. As stated in our sidebar, we merely reblog the themes, so please ask the theme maker.",
            ],
          },
          {
            question:
              "My theme/preview looks wrong!\nI can’t get my theme to look like the example from the theme maker...The colors are not the same as the example live preview!\nI can’t change my theme in the new customize page!",
            answer: [
              "Please contact the original creator for this. We don't own the themes so it's better to ask them",
            ],
          },
          {
            question:"I need help with (name of theme)? ",
            answer:[
              "We don’t make these themes ourselves, we are a resource blog that finds and reblogs themes. The best place to ask for help is the original theme maker."
            ]
          },  
          {
            question:
              "When I try and save a custom theme it says “Invalid HTML”.",
            answer: [
              "That could simply mean one of two things: Tumblr is freaking out or your browser/computer is. Sometimes this can occur if a non-Tumblr hosted script is including in the code. That being said most of the time Tumblr is just picky. First things you can try are simply just hitting save and/or refreshing. If those things don’t work, try clearing out your cache (if you know how to do that) and then trying again. If you still experience the issue, we definitely suggest contacting the original theme maker.",
            ],
          },
        ],
      },
      {
        heading:"Page types & questions",
        data: [
          {
            question:"How I do make a (custom) blog page?",
            answer: [
              "Please check the installing of pages section in the <a href='/tutorials'>tutorial index.</a>"
            ]
          },
          {
            question:"Can you show me themes that allow pages?",
            answer: [
              "All themes allow you to add pages. It is a feature within Tumblr and no theme can or will change. However, not all themes have page links enabled. This is when a link is automatically made when people check ‘Show a Link to This Page’. Instead you just have to manually add the link. Just like any other additional links you normally add. And you don’t know how to add links <a href='/basics01'>read here</a>. If you don’t know the URL of your page - it’s the one you typed in at the top when you created the page."
            ]
          },
          {
            question:"I can’t seem to “Custom” pages? <br> I seem to only have the “Standard” page option?",
            answer: [
              "You just have to wait. Again, it is nothing to do with the theme. It’s just tumblr likes to verify blogs are “run by humans”. So if you like some posts, reblog a few things, follow some people and wait a day or two the “Custom” option will pop up. "
            ]
          },
          {
            question:"Is there a limit to the amount of pages we can have?",
            answer: [
              "Not that we’re aware of. "
            ]
          },
        ]
      },
      {
        heading: "Miscellaneous",
        data: [
          {
            question:
              "What theme are you using?",
            answer: [
              "A custom theme exclusively made by <a href='https://fukuo.tumblr.com/'>fukuo</a>",
            ],
          },
          {
            question:
              "What is the difference between live previews and static previews?",
            answer: [
              "Live previews tend to be on a blog meaning you can use the page navigation and view the permalink pages (the ones that list all the likes and reblogs).",
              "Static previews are on custom pages instead of a blog in which you can’t view permalink pages or use the page navigation because they aren’t on a blog, therefore don’t have that capability", 
              "Theme makers have started using static previews since Tumblr has cracked down on some theme makers for “hogging” URLs for their live previews.",
            ],
          },
        ],
      },
    ],
    faq_selected: 0,
  },
});
