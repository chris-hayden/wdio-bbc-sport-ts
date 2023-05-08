class Helpers {
    public toCamelCase(str: string) {
        return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
          }).replace(/\s+/g, '');       
    }
}

export default new Helpers;
