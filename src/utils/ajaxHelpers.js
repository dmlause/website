import fetch from 'isomorphic-fetch';

export function serialize(searchOptions) {
    const query = [];
    for (const prop in searchOptions)
        if (searchOptions.hasOwnProperty(prop)) {
            query.push(encodeURIComponent(prop) + "=" + encodeURIComponent(searchOptions[prop]));
        }
    return query.join("&");
}

export function noAuthget(url) {
    return fetch(url, {
        method: "GET"
    })
        .then(response => response.json());
}

export function authorizedGet(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
        .then(response => {
            if(response.headers.get('contet-type')) {
                return response.json();
            }
        });
}

export function authorizedPost(url, postBody) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    })
        .then(response => response);
}

export function authorizedDelete(url) {
    return fetch(url, {
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    })
        .then(response => response);
}

