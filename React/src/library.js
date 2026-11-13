const baseurl = "http://localhost:4000";
//const baseurl = "";
const resourceurl = "/BAWAdb";

const url = `${baseurl}${resourceurl}`;

async function searchEverything(table) {
    try {
        const data = await fetch(`${url}/search_everything/${table}`, {
            mode: "cors",
        });
        const result = await data.json();
        return result.queryResult;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function search(table, searchword, value) {
    try {
        const data = await fetch(`${url}/search/${table}/${searchword}/${value}`, {
            mode: "cors",
        });
        const result = await data.json();

        return result.queryResult;
    } catch (error) {
        return console.error(error);
    }
}

async function add(table, newdata) {
    const options = {
        method: "POST",
        body: JSON.stringify(newdata),
        headers: { "Content-Type": "application/json" },
        mode: "cors",
    };
    try {
        console.log(options, `${url}/add/${table}`);
        const data = await fetch(`${url}/add/${table}`, options);
        const result = await data.json();
        console.log(result);
        if (result.quertyResult.amountOfChangedLines > 0) {
            return Promise.resolve("added successfully");
        }
        return Promise.resolve("not added");
    } catch (error) {
        console.log(error);
        return Promise.reject("ERROR! Adding has failed!");
    }
}

async function update(table, key, newdata) {
    const options = {
        method: "PUT",
        body: JSON.stringify(newdata),
        headers: { "Content-Type": "application/json" },
        mode: "cors",
    };
    try {
        const data = await fetch(`${url}/update/${table}/${key}`, options);
        const result = await data.json();
        if (result.queryResult.amountOfChangedLines > 0) {
            return Promise.resolve("added successfully");
        }
        return Promise.resolve("not added");
    } catch (virhe) {
        return Promise.reject("ERROR! Adding has failed!");
    }
}

export { searchEverything, search, add, update };
