const marked=require('marked');
const sanitize=require('sanitize-html');

function SanitizeMarkdown(markdowncontent){
     const convertedhtml=  marked.parse(markdowncontent);

     const sanitizehtml=sanitize(convertedhtml,{
        allowedTags:sanitize.defaults.allowedTags
     })
     return sanitizehtml;
}
// const input=`
//  hello world
//  ### lakshya
//  <script><script/>
// `
// const output=SanitizeMarkdown(input);
// console.log(output)
module.exports=SanitizeMarkdown;