/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

noun1 = "turtle"
name1 = "Sam"
noun2_plural = "socks"
verb1_past_tense = "jumped"
verb2_past_tense = "laughed"
adjective1 = "fun"

const story = `
A ${noun1} named ${name1} went to the store to buy some ${noun2_plural}. When he was there, he ${verb1_past_tense} and ${verb2_past_tense}. It was ${adjective1}.
`

console.log(story)
