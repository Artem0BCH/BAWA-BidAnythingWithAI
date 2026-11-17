export default function change(thing, fieldorder) {
    const params = [];

    for(const key of fieldorder) {
        params.push(thing[key]);
    }
    return params;
}