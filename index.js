javascript: document.querySelectorAll("[class='artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view']").forEach((v) => {
    console.log(v.textContent);
    if(v.textContent.trim().toLowerCase() == "endorse") v.click();
})
