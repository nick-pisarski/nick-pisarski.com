export  function createAction(type, data){
    return {type, ...data}
};