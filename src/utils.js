export default {
    setIfExists : (target, source, fieldName) => {
        const fieldVal = source[fieldName];
        if (typeof fieldVal !== 'undefined') {
            target[fieldName] = fieldVal;
        }
    }
};
