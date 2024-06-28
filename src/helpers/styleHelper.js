export function c(...args){
    return args.reduce((carry, item) => 
        {
            return carry + " " + item
        }
    )
}