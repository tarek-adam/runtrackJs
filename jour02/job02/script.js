function showhide() {
    var article = document.getElementById("dynamic-article");
    
    // If the article exists, remove it
    if (article) {
        article.remove();
    } else {
        // If the article doesn't exist, create it and append it to the body
        article = document.createElement("article");
        article.id = "dynamic-article";
        article.textContent = "The important thing is not the fall, but the landing.";
        document.body.appendChild(article);
    }
}
