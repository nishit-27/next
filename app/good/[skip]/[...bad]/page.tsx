//this will take care or everything after good/couldBeAnyThing/....../...../.....

export default function ({params}:{params:any}) {
    const data = JSON.stringify(params.bad)
    return <div>
        else is here: {data}
    </div>
}