export default function formSQL(sqljson){
    const sentences = {};
    
    for(const key of Object.keys(sqljson)) {
        sentences[key] = {};
        for(const field of Object.keys(sqljson[key])){
            sentences[key][field] = {};
            if(sqljson[key][field].sql){
                sentences[key][field].sql = sqljson[key][field].sql.join(" ");
            }
            if(sqljson[key][field].parametricorder){
                sentences[key][field].parametricorder =
                sqljson[key][field].parametricorder;
            }
        }
        if(sqljson[key].basickey){
            sentences[key].basickey = sqljson[key].basickey;
        }
    }
    return sentences;
}