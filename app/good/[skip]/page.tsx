//this will take care or everything after good/......./
export default function skip({params}:{params:any}) {
    const data = params.skip
    return <div>
        I have taken everything:{JSON.stringify(data)}
    </div>
}