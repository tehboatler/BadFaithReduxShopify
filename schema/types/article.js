
const Article = {
  "name": "Article",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "author": "ArticleAuthor",
    "blog": "Blog",
    "comments": "CommentConnection",
    "content": "String",
    "contentHtml": "HTML",
    "excerpt": "String",
    "excerptHtml": "HTML",
    "id": "ID",
    "image": "Image",
    "publishedAt": "DateTime",
    "tags": "String",
    "title": "String",
    "url": "URL"
  },
  "implementsNode": true
};
export default Article;