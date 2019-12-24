function arrToJson(form) {
    var result = {};

    var arr = form.serializeArray();
    arr.forEach(item => {
        result[item.name] = item.value;
    });
    return result
}

