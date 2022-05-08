/*
Social media accounts allow for "liking" posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
This function takes an array containing the names of people that like an item and returns text that lists who liked some content.
*/

function likes(names) {
    names = names || []
    switch (names.length) {
        case 0:
          return "no one likes this"
          break
        case 1:
          return `${names[0]} likes this`
          break
        case 2:
          return `${names[0]} and ${names[1]} like this`
          break
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
          break
        default:
          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }