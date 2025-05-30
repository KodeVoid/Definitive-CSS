const ps = document.querySelectorAll("p");
ps.forEach(p => {
    console.log([...p.childNodes].map(n => ({
        type: n.nodeType === 3 ? 'Text' : n.tagName,
        value: n.textContent.trim()
    })));
});
