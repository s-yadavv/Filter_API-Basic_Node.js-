const response = await fetch("https://example.org/post",{
    method : "GET",
    body: JSON.stringify({ username : "tom_1"}),
    headers:{
        "Content-Type":application/json,
    },
})