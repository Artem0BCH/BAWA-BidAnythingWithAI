export default function change(object, fieldorder) {
    const params = [];

    for(const key of fieldorder) {
        params.push(object[key]);
    }
    return params;
}